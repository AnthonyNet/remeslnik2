
/*------------
GALLERY 2
Switch between photos in gallery
---------------*/ 

let changeImg = () => {
  let galleriesTab = document.querySelectorAll('.gallery-p');
   galleriesTab.forEach(gallery=>{
    let bigImg = gallery.previousElementSibling.firstElementChild;
    const images =  gallery.querySelectorAll('img')
   
    images.forEach(image=>{
      image.addEventListener('click', function(){
        bigImg.src=image.src
      })
    })
     
   }) 

}

changeImg()


/*------------
GALLERY 2
Switch between tabs
---------------*/ 

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

/*------------
SHOW AND HIDE MENU
&& GALLERY OF FINISHED JOBS

---------------*/ 

$(document).ready(function() {
  $('#hamburgerMenu').click(function(){
    $('#hamburgerMenu').css({display: "none" },2500);
    $('#closeMenu, .nav-item').fadeIn(1000);
    

    $('#closeMenu,  .nav-item').click(function(){
        $('#closeMenu, .nav-item').css({display: "none" });
        $('#hamburgerMenu').fadeIn(1000);
    })
  })

  $('.gallery2').hide();
  $('.flex-btnClose').hide();
  
/*------------
OnClick show gallery nr.2
&show/hide gallery´s button

---------------*/ 

  $('.flex-btn').click(function(){
   // $('.gallery2').css({display: "block"}).toggle();
   $('.flex-btn').hide();
   $('.flex-btnClose').show();
   $('.gallery2').show();

})

$('.flex-btnClose').click(function(){
  $('.gallery2').hide();
  $('.flex-btnClose').hide();
  $('.flex-btn').show();
})

$('[data-aos]').parent().addClass('hideOverflowOnMobile');

});

