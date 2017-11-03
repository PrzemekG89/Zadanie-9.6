//Manipulowanie DOM po kliknięciu button
var add = document.getElementById('addElem');
var list = document.getElementById('list');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var liNumber = document.getElementsByTagName('li').length;
    element.innerHTML = 'item ' + liNumber;
    list.appendChild(element);
});