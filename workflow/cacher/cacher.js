//Can't make this work if it's not global
const cache = new Map();

var Cacher = function(){
    //Don't know how to access from internal func
    //this.cache = new Map();
    this.withCache = function(func){
        return function(number){
            if (cache.has(number)){
                console.log('found');
                return cache.get(number);
            } else {
                let res = func(number);
                cache.set(number, res);
                console.log('created');
                return res;
            }
        }
    }    
}

const number = document.getElementById("number");
const calculate = document.getElementById("calculate");
const output = document.getElementById("output");

calculate.addEventListener('click', () => {
    const cacher = new Cacher();
    const cachedFunc = cacher.withCache(math.factorial);
    const result = cachedFunc(parseInt(number.value));
    output.innerHTML = "Result = " + result;
})