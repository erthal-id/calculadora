var buttons = document.getElementsByTagName('button');

/*
Array.prototype.forEach.call(buttons, function (b){
    b.addEventListener('click', createRipple);
});
*/

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', createRipple);
}

function createRipple(e){
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);
    
    circle.style.width = circle.style.height = d + 'px';

    circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
    circle.style.top = e.clientY - d / 2 + 'px';

    circle.classList.add('ripple');
    setTimeout(function(){
        circle.remove();
    }, 1000);
}