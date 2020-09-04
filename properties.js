if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var button = document.getElementsByClassName('stay-duration');
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click',toggleDuration);
    }
    
    var smallImg = document.getElementsByClassName('property-small-image');
    for (var i = 0; i < smallImg.length ; i++) {
        smallImg[i].addEventListener('mouseover', bigImg);
    }
}

function toggleDuration () {
    if (this.className === 'stay-duration passive'){
        document.getElementsByClassName('active')[0].className = 'stay-duration passive';
        this.className = 'stay-duration active';

        if (this.innerHTML === 'Short Stay <span>(Upto 14 Days)</span>') {
            var price = document.getElementsByClassName('property-pricing-container');
            for (var i = 0; i < price.length ; i++) {
                var cost = price[i].getElementsByTagName('span')[0].className;
                price[i].getElementsByTagName('span')[0].innerHTML = cost;
            }
        } else {
            var price = document.getElementsByClassName('property-pricing-container');
            for (var i = 0; i < price.length ; i++) {
                var cost = price[i].getElementsByTagName('span')[0].id;
                price[i].getElementsByTagName('span')[0].innerHTML = cost;
            }
        }
    }
}

function bigImg (event) {
    var img = event.target;
    var url = img.style.backgroundImage;
    img.parentElement.parentElement.getElementsByClassName('property-main-image')[0].style.backgroundImage = url;
}