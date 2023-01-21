// Side Nav Responsive 
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);
        
// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
});


//parallax effect
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax); 

//portfolio effect
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

//scroll Animated
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{
    scrollOffset: 50
});