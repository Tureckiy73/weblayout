window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.add('header__burger-isactive')
  })
  document.querySelector('#cross').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('header__burger-isactive')
  })
})

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-we-work__spoiler').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)
      document.querySelectorAll('.how-we-work__step').forEach(function(tabContent) {
        tabContent.classList.remove('how-we-work__step-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__step-active')

    })
    document.getElementById("first-step").click();
  })

})

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );
