function colorCode(value){
    switch(typeof value){
        case "string": {
            return `<span class = "string">"${value}"</span>`
        }
        case "number": {
            return `<span class = "number">${value}</span>`
        }
        default: {
            return value;
        }
    }
}

function onCheckboxToggle(level){
    const divs = document.querySelectorAll(`*[id^=lvl${level}]`);
    for (let i = 0; i < divs.length; i++){
        divs[i].classList.toggle('collapse');
    }
}

let depth = 0;

function buildTree(obj) {
    const layout = [];
    if(obj !== null && typeof obj === "object") {
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === "object"){
                layout.push(
                    `<div><input 
                        type = "checkbox" 
                        checked 
                        onChange="onCheckboxToggle(${depth})">
                        ${key} : ${Array.isArray(value) ? '[ ]' : '{ }'}
                        <div class = "level" id = "lvl${depth}">`
                );
                depth++;
                layout.push(buildTree(value));
            } else { 
                layout.push(
                    `<p id ="lvl${depth - 1}el">${key} : ${colorCode(value)}</p>`
                );
            }    
        })
        layout.push(`</div></div>`);
    } 
    return layout.join('');
}

const submit = document.getElementById('submit');
const input = document.getElementById('json');
const output = document.getElementById('tree');

function render(res){
    output.innerHTML = res;
}

submit.addEventListener('click', () => {
    if (input.value){
        try {
            const obj = JSON.parse(input.value);
            depth = 0;
            const res = buildTree(obj);
            render(res);
        } catch (error){
            render(error.message);
        }
    } else {
        render("null");
    }
})