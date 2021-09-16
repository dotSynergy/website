window.onload = () => {
    setTimeout(function () {
            window.scrollTo(0, 0);
        },100);
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    document.getElementById("portfolio_container").style = 'display: none;';    
    document.getElementById("bio_container").style = 'display: none;';
    document.getElementById("contacts_container").style = 'display: none;';
};