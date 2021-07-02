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
        tabContent.classList.remove('how-we-work__step-active')
      })
      document.querySelectorAll('.how-we-work__spoiler').forEach(function(tabContent) {
        tabContent.classList.remove('how-we-work__spoiler-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__step-active')
      document.querySelector(`[data-path="${path}"]`).classList.add('how-we-work__spoiler-active')
    })
    document.getElementById("first-step").click();
  })
})

// $(document).ready(function() {
//   $('.faq__question-box').click(function() {
//     const parent = $(this).parent();
//     if (parent.hasClass('faq__item--active')) {
//       parent.removeClass('faq__item--active');
//       $(this).children('.faq__cross').removeClass('faq__cross--rotate');
//     }
//     else {
//       $('.faq__item').removeClass('faq__item--active');
//       parent.addClass('faq__item--active');
//       $('.faq__cross').removeClass('faq__cross--rotate');
//       $(this).children('.faq__cross').addClass('faq__cross--rotate');
//     }
//   })
// })

$(document).ready(function() {
  $('.faq__item').click(function() {
    const par = $(this).children('.faq__question-box');
    if ($(this).hasClass('faq__item--active')) {
      $(this).removeClass('faq__item--active');
      par.children('.faq__cross').removeClass('faq__cross--rotate');
    }
    else {
      $('.faq__item').removeClass('faq__item--active');
      $(this).addClass('faq__item--active');
      $('.faq__cross').removeClass('faq__cross--rotate');
      par.children('.faq__cross').addClass('faq__cross--rotate');
    }
  })
})
