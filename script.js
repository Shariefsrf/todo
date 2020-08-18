var ul = document.getElementById('list')

let addButton = document.getElementById('add')
addButton.addEventListener('click', addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () =>
    ul.remove());


function addItem() {
    console.log('add button clicked');
   
}


function removeItem() {
    let li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}