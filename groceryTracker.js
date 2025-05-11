let item1;
let item2;
let item3;

function calculate(){
    item1 = parseFloat(document.getElementById('item1').value);
    item2 = parseFloat(document.getElementById('item2').value);
    item3 = parseFloat(document.getElementById('item3').value);

    let total = item1 + item2 + item3;
    document.getElementById('text1').innerText = `The total is: ${total}`;
    
}

