let bioContainer;
let contContainer;
let portContainer;

let bioClose;
let contClose;
let portClose;

let catchMovement;

function limitScroll(e,container){
    
    var scroll = e.srcElement.scrollTop;
    
    if(scroll < -20) scroll = -20;
    
    container.style.transform = 'translateY('+ scroll +'px)';
    
}

document.onreadystatechange = () => {

    if(document.readyState == 'complete'){
        
        bioContainer = document.getElementById("bio_container");
        contContainer = document.getElementById("contacts_container");
        portContainer = document.getElementById("portfolio_container");
        
        bioClose = document.getElementById("c_btn_b");
        contClose = document.getElementById("c_btn_c");
        portClose = document.getElementById("c_btn_p");
        
        bioContainer.addEventListener('scroll', function(e) {limitScroll(e, bioClose);});
        
        contContainer.addEventListener('scroll', function(e) {limitScroll(e, contClose);});
        
        portContainer.addEventListener('scroll', function(e) {limitScroll(e, portClose);});
    }
};

function openPortfolio(){
    portContainer.style.display = 'block';
    catchMovement = setInterval(function() {portContainer.style.transform = 'translateY('+ (-(Math.min(document.documentElement.clientHeight, window.innerHeight || 0))) +'px)'}, 50);
    portClose.style.display = 'block';
}

function closePortfolio(){
    portContainer.style.transform = 'translateY('+ (Math.min(document.documentElement.clientHeight, window.innerHeight || 0)) +'px)';
    portClose.style.display = 'none';
    clearInterval(catchMovement);
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

function revealPhone(o){

    n = document.getElementById('phone');

    v = 'JzM1MSAnICsgJycgKyAnODk2ICcgKyAnNzgzNCc=';

    console.log(n);

    n.innerHTML = n.innerHTML + eval(atob(v));
    n.href = 'tel:+39'+ eval(atob(v)).replaceAll(' ', '');

    //hack orribile
    document.getElementById('phone-1').remove();
    document.getElementById('phone-2').remove();
}

window.onresize = () => {
    contResize(portContainer, 'translateY('+ (-(document.body.clientHeight)) +'px)');
    
    contResize(contContainer, 'translateX('+ ((document.body.clientWidth)) +'px)');
    
    contResize(bioContainer, 'translateX('+ (-(document.body.clientWidth)) +'px)');
}
