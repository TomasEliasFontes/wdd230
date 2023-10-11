const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const max = [] //list to count the scripture input

button.addEventListener('click', () => {

// During the max is different that 10 you can add another scrpture
if (max.length < 10){

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';


    list.append(li);
    li.append(deleteButton);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
        max.pop();
        });

input.focus();
input.value = '';

//add 1 the list
max.push(1);

}

// It show that the top of scripture is the max and you have to delete to add
else {
    alert("It´s the max of scripture, you have to delete 1 to add another")   
}

})
