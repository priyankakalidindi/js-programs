function FindSum() {
    var input = document.getElementById('value').value;
    var object = JSON.parse(input);
    console.log(object);
    var result = 0;

    for(var o in object)
        result += object[o];
    document.getElementById('result').innerHTML = result;
}