(function() {
    const DAYS_IN_YEAR = 365;
    const DAYS_IN_MONTH = 30;
    const HOURS_IN_DAY = 24;
    const MINUTES_IN_HOUR = 60;
    const SECONDS_IN_MINUTE = 60;
    const MILISECONDS_IN_SECOND = 1000;
    const MONTHS_IN_YEAR = 12;

    var OneMoment = function(raw){   
        this.date = new Date(raw);
        
        OneMoment.parse = function(date, mask) {
            let year = mask.search('YYYY');
            year = parseInt(date.slice(year, year + 4));
            let month = mask.search('MM');
            month = parseInt(date.slice(month, month + 2));
            let day = mask.search('DD');
            day = parseInt(date.slice(day, day + 2));
            const newDate = new Date(year, month - 1, day);
            return new OneMoment(newDate);
        };  
    
        this.format = function(mask) {
            if (mask !== ""){
                const year = this.date.getFullYear();
                const month = this.date.getMonth() + 1;
                const day = this.date.getDate();
                let result = mask.replace('YYYY', year);
                result = result.replace('MM', month);
                result = result.replace('DD', day);
                return result;
            } else {
                return "ERROR! Mask null, can't format."
            }
        }

        this.fromNow = function(){
            const currentDate = new Date();
            const difference = currentDate.getTime() - this.date.getTime();
            
            let seconds = Math.floor(difference / MILISECONDS_IN_SECOND),
            minutes = Math.floor(seconds / SECONDS_IN_MINUTE),
            hours   = Math.floor(minutes / MINUTES_IN_HOUR),
            days    = Math.floor(hours / HOURS_IN_DAY),
            months  = Math.floor(days / DAYS_IN_MONTH),
            years   = Math.floor(days / DAYS_IN_YEAR);

            seconds %= SECONDS_IN_MINUTE;
            minutes %= MINUTES_IN_HOUR;
            hours %= HOURS_IN_DAY;
            days %= DAYS_IN_MONTH;
            months %= MONTHS_IN_YEAR;

            return (
                years + " Years, " + 
                months + " Months, " + 
                days + " Days, " +
                hours + "  Hours, " +
                minutes + " Minutes, " +
                seconds + " Seconds."
            ) 
        };

        this.toDate = function() {
            return this.date;
        };
    };

    const instance = new OneMoment(Date());
    console.log(instance);
  
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
        module.exports = OneMoment;
    } else {
        window.OneMoment = OneMoment;
    }


})();