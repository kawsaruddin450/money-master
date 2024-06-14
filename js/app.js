const incomeField = document.getElementById('income');
const foodField = document.getElementById('food');
const rentField = document.getElementById('rent');
const clothesField = document.getElementById('clothes');

function clearFields(){
    incomeField.value = '';
    foodField.value = '';
    rentField.value = '';
    clothesField.value = '';
}

function isEmpty() {
    if (incomeField.value == '' || foodField.value == '' || rentField.value == '' || clothesField.value == '') {
        return true;
    }
    else {
        return false;
    }
}
function isString() {
    if (isNaN(incomeField.value) || isNaN(foodField.value) || isNaN(rentField.value) || isNaN(clothesField.value)) {
        return true;
    }
    else {
        return false;
    }
}
function isNegative(){
    if(incomeField.value<0 || foodField.value<0 || rentField.value<0 || clothesField.value<0){
        return true;
    }
    else{
        return false;
    }
}
document.getElementById('calculate').addEventListener('click', function () {
    const empty = isEmpty();
    const string = isString();
    const negative = isNegative();

    if (empty == true) {
        alert('Please fill all the fields!');
        clearFields();
    }
    else if(string == true){
        alert('Please enter number input!!');
        clearFields();
    }
    else if(negative == true){
        alert('please enter a positive value!');
        clearFields();
    }
    else {
        const totalExpense = parseFloat(foodField.value) + parseFloat(rentField.value) + parseFloat(clothesField.value);
        const balance = parseFloat(incomeField.value) - totalExpense;

        if (totalExpense <= parseFloat(incomeField.value)) {
            document.getElementById('total').innerText = totalExpense;
            document.getElementById('balance').innerText = balance;
        }
        else{
            alert('Cut your coat according to your clothes!!');
            clearFields();
        }
    }
})

const saveField = document.getElementById('save-amount');
function isSaveEmpty(){
    if(saveField.value == ''){
        return true;
    }
    else{
        return false;
    }
}
function isSaveString(){
    if(isNaN(saveField.value)){
        return true;
    }
    else{
        return false;
    }
}
function isSaveNegative(){
    if(parseFloat(saveField.value)<0){
        return true;
    }
    else{
        return false;
    }
}
function clearSaveField(){
    saveField.value = '';
}

const saving = document.getElementById('saving');
const remaining = document.getElementById('remaining');
document.getElementById('save-btn').addEventListener('click', function(){
    const saveEmpty = isSaveEmpty();
    const saveString = isSaveString();
    const saveNegative = isSaveNegative();

    if(saveString == true){
        alert('Please enter a number!');
        clearSaveField();
    }
    else if(saveNegative == true){
        alert('Please enter a positive value!');
        clearSaveField();
    }
    else if(saveEmpty == true){
        saving.innerText = '00';
        remaining.innerText = document.getElementById('balance').innerText;
    }
    else{
        const savingpercent = parseFloat(saveField.value);
        const savingAmount = (parseFloat(incomeField.value)*(savingpercent/100)).toFixed(2);
        saving.innerText = savingAmount;
        if(savingAmount > parseFloat(document.getElementById('balance').innerText)){
            alert("You don't have enough balance to save this much.");
            clearSaveField();
        }
        else{
            remaining.innerText = document.getElementById('balance').innerText - savingAmount;
        }
    }
})