var ul = document.getElementById('list')

let addButton = document.getElementById('add')
addButton.addEventListener('click', addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () =>
    ul.remove());


function addItem() {
    let first = document.getElementById('input');
    let val = first.value;
    let textnode = document.createTextNode(val);

    if (val === '') {
        let para = document.createElement('p')
        para.textContent = 'hey you have to enter a todo'
        var any = document.getElementById('container')
        add.insertAdjacentElement('afterend', para)



        setTimeout(() => {
            para.style.opacity = '0';
            para.remove()
        }, 1000);




    } else {
        let li = document.createElement('li');
        // li.setAttribute('class', 'mycheck')

        let input = document.createElement('input');
        input.type = 'checkbox';
        input.setAttribute('id', 'check');

        let label = document.createElement('label');
        label.setAttribute('for', 'item');


        ul.appendChild(label)
        li.appendChild(input)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])

        setTimeout(() => {
            li.className = 'visual'
        }, 2);

        first.value = ''
    }

}


function removeItem() {
    let li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}