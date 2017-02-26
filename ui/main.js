console.log('Loaded!');

var img = document.getElementById('madi');

var margin = 0;

function moveRight(){
    margin = margin + 10;
    img.style.marginRight = margin+'px';
    
}

img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};
