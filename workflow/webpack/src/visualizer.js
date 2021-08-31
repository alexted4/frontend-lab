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

let depth = 0;

function buildTree(obj) {
    const result = document.createElement("div");
    if(obj !== null && typeof obj === "object") {
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === "object"){
                
                // a container for checkbox and key to wrap with flex
                const keyWrapper = document.createElement("div");
                keyWrapper.classList.add("keyWrapper");

                // checkbox creation
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `cb${depth}`;
                checkbox.checked = true;
                checkbox.addEventListener('change', () => {
                    const divs = document.querySelectorAll(`*[id^=lvl${checkbox.id.slice(2)}]`);
                    for (let j = 0; j < divs.length; j++){
                        divs[j].classList.toggle('collapse');
                    }
                });
                keyWrapper.appendChild(checkbox);

                // key creation
                const keyDiv = document.createElement("div");
                keyDiv.innerHTML = `${key} : ${Array.isArray(value) ? '[ ]' : '{ }'}`
                keyWrapper.appendChild(keyDiv);

                result.appendChild(keyWrapper);

                // level div creation
                const levelDiv = document.createElement("div");
                levelDiv.classList.add('level');
                levelDiv.id = `lvl${depth}`;
                result.appendChild(levelDiv);
                
                // push children into level div
                depth++;
                levelDiv.appendChild(buildTree(value));

            } else {
                // child creation
                const p = document.createElement("p");
                p.id = `lvl${depth-1}el`;
                p.innerHTML += `${key} : ${colorCode(value)}`;
                result.appendChild(p);
            }
            
        })
    }
    return result;
}

const submit = document.getElementById('submit');
const input = document.getElementById('json');
const output = document.getElementById('tree');

function render(res){
    output.innerHTML = "";
    output.appendChild(res);
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