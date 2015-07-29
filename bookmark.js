function(){
    var css = '*{outline:1px solid rgba(255,0,0,.3)}}',
        head = document.head||document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type='text/css';
    if(style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
};
