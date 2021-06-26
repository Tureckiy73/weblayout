window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.add('header__burger-isactive')
  })
  document.querySelector('#cross').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('header__burger-isactive')
  })
})

const swiper = new Swiper('.swiper-container', {
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-we-work__spoiler').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how-we-work__step').forEach(function(tabContent) {
        tabContent.classList.remove('how-we-work__step-active')})
      document.querySelectorAll('.how-we-work__spoiler').forEach(function(tabContent) {
        tabContent.classList.remove('how-we-work__spoiler-active')})

      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__step-active')
      document.querySelector(`[data-path="${path}"]`).classList.add('how-we-work__spoiler-active')

    })
    document.getElementById("first-step").click();
  })

})

// $( function() {
//   $( ".faq__item" ).accordion({
//     header: "faq__question-box",
//     collapsible: true
//   });
// } );


$(document).ready(function() {
  $('.faq__question-box').click(function() {
    $(this).next('.faq__content').slideToggle(200);
    $(this).children('.faq__cross').toggleClass('faq__cross--rotate');
  })
})
