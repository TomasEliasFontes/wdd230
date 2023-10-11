const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';


    list.append(li);
    li.append(deleteButton);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
        });

input.focus();
input.value = '';

});
