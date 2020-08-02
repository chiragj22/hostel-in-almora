if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var addRoomButtons = document.getElementsByClassName('select-btn');
    for (var i = 0; i < addRoomButtons.length; i++) {
        var button = addRoomButtons[i];
        button.addEventListener('click', addRoom)
    }

    var plusButtons = document.getElementsByClassName('plus');
    for (var i = 0; i < plusButtons.length; i++) {
        var button = plusButtons[i];
        button.addEventListener('click',incrementValue)
    }

    var minusButtons = document.getElementsByClassName('minus');
    for (var i = 0; i < minusButtons.length; i++) {
        var button = minusButtons[i];
        button.addEventListener('click',decrementValue)
    }
    
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("cinDate").setAttribute('min', today);
    document.getElementById('cinDate').value = today;
    updateMinCout();

    document.getElementById('cinDate').addEventListener('change', updateMinCout);
    document.getElementById('coutDate').addEventListener('change', updateTotalCost);
}

function updateMinCout () {
    var cinDate = new Date(document.getElementById('cinDate').value);
    var coutDate = new Date(cinDate.getTime()+(7*24*60*60*1000)).toISOString().split('T')[0];
    document.getElementById('coutDate').value = coutDate;
    document.getElementById("coutDate").setAttribute('min', coutDate);
}

function calcDuration () {
    var cinDate = new Date(document.getElementById('cinDate').value);
    var coutDate = new Date(document.getElementById('coutDate').value);
    var duration = Math.round((coutDate.getTime()-cinDate.getTime())/(24*60*60*1000));
    return duration;
}

function addRoom(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.style.display = 'none';
    var addButton = buttonClicked.parentElement.parentElement.getElementsByClassName('select1-btn')[0];
    addButton.style.display = 'flex';
    addButton.getElementsByClassName('productQty')[0].value = 1;
    updateTotalCost();
}

function incrementValue(event) {
    var buttonClicked = event.target;
    var value = buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value;
    value++;
    buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value = value;
    updateTotalCost();    
}

function decrementValue(event) {
    var buttonClicked = event.target;
    var value = buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value;
    value--;
    buttonClicked.parentElement.parentElement.getElementsByClassName('productQty')[0].value = value;
    if (value == 0 ) {
        buttonClicked.parentElement.parentElement.parentElement.style.display = 'none';
        buttonClicked.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('select-btn')[0].style.display = 'flex';
    }
    updateTotalCost();
} 

function updateTotalCost() {
    var cartItemContainer = document.getElementsByClassName('room-qty-container');
    var total = 0;
    for (var i = 0; i < cartItemContainer.length; i++) {
    var price = parseInt(cartItemContainer[i].getElementsByClassName('room-price')[0].innerText.replace('₹',''))
    var qty = parseInt(cartItemContainer[i].getElementsByClassName('productQty')[0].value)
    total = total + price*qty;
    }
    var duration = calcDuration();
    gtotal = total*duration;
    document.getElementsByClassName('costing-value')[0].innerText = '₹' + gtotal;
}