(function() {
    var div = document.createElement('div');
    div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
    div.textContent = 'Injected!';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.background = 'yellow';
    document.body.appendChild(div);
    
    document.addEventListener('click', function(e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        let text = target.textContent || target.innerText;
        console.log("target and text", target, text);

        target.parentNode.removeChild(target);
    }, false);
})();