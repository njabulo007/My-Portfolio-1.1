const developer = document.getElementById('developer');




developer.addEventListener('click', change2Blue);

function change2Blue(){
developer.style.color = 'blue';
if (developer.style.color = 'blue'){
    developer.addEventListener('click', change2Red);
}
}

function change2Red(){
    developer.style.color = 'red'

    if (developer.style.color = 'red'){
        developer.addEventListener('click', change2Blue);
    }

}