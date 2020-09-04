if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready () {

    var smallImg = document.getElementsByClassName('property-small-image');
    for (var i = 0; i < smallImg.length ; i++) {
        smallImg[i].addEventListener('mouseover', bigImg);
    }

}

function bigImg (event) {
    var img = event.target;
    var url = img.style.backgroungImg;
    img.parentElement.getElementsByClassName('property-main-image')[0].style.backgroungImg = url;
}