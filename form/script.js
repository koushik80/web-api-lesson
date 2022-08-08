function validation() {
    const inputObj = document.getElementById('id1');
    
    if (!inputObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inputObj.validationMessage;
    }
}