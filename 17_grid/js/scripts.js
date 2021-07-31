window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.add('header__burger-isactive')
  })
  document.querySelector('#cross').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('header__burger-isactive')
  })
})
