let width;
let length;

function calculate(){
    width = parseFloat(document.getElementById('width').value);
    length = parseFloat(document.getElementById('length').value);

    let result = width * length;
    document.getElementById('result').innerText = `The result is = ${result}`; 
    
}