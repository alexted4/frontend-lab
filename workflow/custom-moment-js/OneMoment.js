(function() {
    var OneMoment = (function() {
        var OneMoment = function(raw) {
            this.date = new Date(raw);
        };
       
        OneMoment.prototype.parse = function parse(date, mask) {
            if (date !== "" && mask !== ""){
                let year = mask.search('YYYY');
                year = date.slice(year, year + 4);
                let month = mask.search('MM');
                month = date.slice(month, month + 2);
                let day = mask.search('DD');
                day = date.slice(day, day + 2);
                this.date = new Date(year + '-' + month + '-' + day);
                return this.date;
            } else {
                return "ERROR! Date or Mask null, can't parse."
            }
        };

        OneMoment.prototype.format = function format(mask) {
            if (mask !== ""){
                let year = this.date.getFullYear();
                let month = this.date.getMonth() + 1;
                let day = this.date.getDate();
                let result = mask.replace('YYYY', year);
                result = result.replace('MM', month);
                result = result.replace('DD', day);
                return result;
            } else {
                return "ERROR! Mask null, can't format."
            }
        };

        OneMoment.prototype.fromNow = function fromNow() {
            let currentDate = new Date();
            let difference = currentDate.getTime() - this.date.getTime();
            
            let seconds = Math.floor(difference / 1000),
            minutes = Math.floor(seconds / 60),
            hours   = Math.floor(minutes / 60),
            days    = Math.floor(hours / 24),
            months  = Math.floor(days / 30),
            years   = Math.floor(days / 365);

            seconds %= 60;
            minutes %= 60;
            hours %= 24;
            days %= 30;
            months %= 12;

            return (
                years + " Years, " + 
                months + " Months, " + 
                days + " Days, " +
                hours + "  Hours, " +
                minutes + " Minutes, " +
                seconds + " Seconds ago."
            ) 
        };

        OneMoment.prototype.toDate = function toDate() {
            if (typeof this.date.getMonth === 'function'){
                return this.date;
            } else {
                return "ERROR! date is not Date()"
            } 
        };
    
        return OneMoment;
    })();
  
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = OneMoment;
    else
        window.OneMoment = OneMoment;
})();