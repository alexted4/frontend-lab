var Cacher = function(){
    this.cache = new Map();
    this.withCache = function(func){
        return (...args) => {
            const key = args.join();
            if (this.cache.has(key)){
                console.log('found');
                return this.cache.get(key);
            } else {
                const res = func(...args);
                this.cache.set(key, res);
                console.log('created');
                return res;
            }
        }
    }    
}

const cacher = new Cacher();
const cachedFunc = cacher.withCache(math.factorial);

const numbers = document.getElementById("numbers");
const calculate = document.getElementById("calculate");
const output = document.getElementById("output");

calculate.addEventListener('click', () => {
    const arr = numbers.value.split(',');
    const result = cachedFunc(arr);
    output.innerHTML = "Result = " + result;
})