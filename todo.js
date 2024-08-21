let todos = [];

function add() {
    const input = document.querySelector('input');
    if (input.value) {
        todos.push(input.value);
        input.value = '';
        render();
    }
}

function remove(index) {
    todos.splice(index, 1);
    render();
}

function edit(index) {
    const content = todos[index];
    const input = document.querySelector('input');
    input.value = content;
    input.focus();
    input.setSelectionRange(0, content.length);
    todos.splice(index, 1);
    render();
}

function render() {
    const container = document.querySelector('.tasks');
    container.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        let element = helper(todos[i], i);
        element.setAttribute('class', 'task');
        container.appendChild(element);
    }
}


function helper(text, index) {
    let element = document.createElement('div');
    let p = document.createElement('p');
    let edit = document.createElement('button');
    let btn = document.createElement('button');
    p.innerText = text;
    edit.innerText = 'Edit';
    btn.innerText = 'Delete';
    element.appendChild(p);
    edit.setAttribute('id', 'edit');
    btn.setAttribute('id', 'delete');
    let innerdiv = document.createElement('div');
    innerdiv.appendChild(edit);
    innerdiv.appendChild(btn);
    edit.setAttribute('onclick', 'edit(' + index + ')');
    btn.setAttribute('onclick', 'remove(' + index + ')');
    element.appendChild(innerdiv);
    return element;
}