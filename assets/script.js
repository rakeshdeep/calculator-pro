function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteOne(input){
    if(input.value.length == 1){
        input.value = null;
    } else {
        input.value = input.value.substring(0, input.value.length - 1);
    }
}


document.getElementById('themeButton').addEventListener('click', function() {
    if (document.getElementById('themebeta').getAttribute('href') === './assets/theme1.css') {
        document.getElementById('themebeta').setAttribute('href', './assets/theme2.css');
    } else if(document.getElementById('themebeta').getAttribute('href') === './assets/theme2.css'){
        document.getElementById('themebeta').setAttribute('href', './assets/theme3.css')

    } else{
        document.getElementById('themebeta').setAttribute('href', './assets/theme1.css');
    }
});