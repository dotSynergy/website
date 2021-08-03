let bioContainer;
let contContainer;
let portContainer;

let bioClose;
let contClose;
let portClose;

function limitScroll(e,container){
    
    var scroll = e.srcElement.scrollTop;
    
    if(scroll < -20) scroll = -20;
    
    container.style.transform = 'translateY('+ scroll +'px)';
    
}

document.onreadystatechange = () => {
    
    bioContainer = document.getElementById("bio_container");
    contContainer = document.getElementById("contacts_container");
    portContainer = document.getElementById("portfolio_container");
    
    bioClose = document.getElementById("c_btn_b");
    contClose = document.getElementById("c_btn_c");
    portClose = document.getElementById("c_btn_p");
    
    bioContainer.addEventListener('scroll', function(e) {limitScroll(e, bioClose);});
    
    contContainer.addEventListener('scroll', function(e) {limitScroll(e, contClose);});
    
    portContainer.addEventListener('scroll', function(e) {limitScroll(e, portClose);});
};

function openPortfolio(){

    //non chiedete perché funziona
            
    portContainer.style.top = 0;
    var str = 'translateY(100vh)';
    portContainer.style.transform = str;

    setTimeout(function () {
        var str = 'translateY(0)';
        portContainer.style.transform = str;
    },10);
    
    portContainer.style.display = 'block';
    portClose.style.display = 'block';
}

function closePortfolio(){
    portContainer.style.transform = 'translateY('+ ((document.body.clientHeight)) +'px)';
    
    portClose.style.display = 'none';
    setTimeout(function () {
        portContainer.style.top = '100%';
    },100);
    setTimeout(function() {portContainer.style.display = 'none' }, 400);
}

function openBio(){
    bioContainer.style.display = 'block';
    bioContainer.style.transform = 'translateX('+ (-(document.body.clientWidth)) +'px)';
    
    bioClose.style.display = 'block';
}

function closeBio(){
    bioContainer.style.transform = 'translateX('+ ((document.body.clientWidth)) +'px)';
    
    bioClose.style.display = 'none';
    setTimeout(function() {bioContainer.style.display = 'none' }, 400);
}


function openContacts(){
    contContainer.style.display = 'block';
    contContainer.style.transform = 'translateX('+ ((document.body.clientWidth)) +'px)';
    
    contClose.style.display = 'block';
}

function closeContacts(){
    contContainer.style.transform = 'translateX('+ (-(document.body.clientWidth)) +'px)';
    
    contClose.style.display = 'none';
    setTimeout(function() {contContainer.style.display = 'none' }, 400);
}

function contResize(container, tr){
    if(container.style.display == 'block')
        container.style.transform = tr;
}

window.onresize = () => {
    contResize(portContainer, 'translateY('+ (-(document.body.clientHeight)) +'px)');
    
    contResize(contContainer, 'translateX('+ ((document.body.clientWidth)) +'px)');
    
    contResize(bioContainer, 'translateX('+ (-(document.body.clientWidth)) +'px)');
}