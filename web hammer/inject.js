(function() {
    
    var div = document.createElement('button');
    div.style.position = 'fixed';
	div.style.top = 50;
	div.style.right = 50;
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.left = '85%';
    div.style.top = '15%';
    div.id = 'stop';
    div.textContent = 'Done!';
    div.style.borderRadius = '5%';
    div.style.background = 'crimson';
    div.style.color = 'white'

    var img = document.createElement('img');
    div.appendChild(img);

    document.body.appendChild(div);
    
    div.addEventListener('click', function(e) {
        document.removeEventListener('click', handleClick)
        document.removeEventListener('mouseover', handleMouseOver)
        document.removeEventListener('mouseout', handleMouseOut)
        div.parentNode.removeChild(div);
    })

    document.addEventListener('click', handleClick, false);
    document.addEventListener('mouseover', handleMouseOver, false)
    document.addEventListener('mouseout', handleMouseOut, false)

    function handleClick(e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        target.parentNode.removeChild(target);
    }
    function handleMouseOver(e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        if (target.id != 'stop') {
            target.style.border = '3px dashed crimson';
            target.style.cursor = '-webkit-grab'
        } 
    }
    function handleMouseOut(e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        target.style.border = '';
        target.style.cursor = '';
    }
})();