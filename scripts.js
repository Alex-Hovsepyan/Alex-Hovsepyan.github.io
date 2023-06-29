let state = 'close'

function menuFunc() {
    let line1 = document.querySelector('.menu_line1')
    let line2 = document.querySelector('.menu_line2')
    let line3 = document.querySelector('.menu_line3')
    switch (state) {
        case 'close' :
            line1.style.transform = 'rotate(45deg)'
            line3.style.transform = 'rotate(-45deg)'
            line3.style.top = '30px'
            line1.style.top = '29px'
            line2.style.top = '30px'
            line2.style.opacity = '0'
            setTimeout(() => {
                line2.style.display = 'none'
            }, 400);
            state = 'open'
        break
        case 'open' : 
            line1.style.transform = 'rotate(0)'
            line3.style.transform = 'rotate(0)'
            line3.style.top = '42px'
            line2.style.display = 'block'
            setTimeout(() => {
                line2.style.opacity = '1'
                line2.style.top = '15px'
            }, 100);
            state = 'close'
    }
}

document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Swiper после загрузки страницы
  var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true
    },
    autoplay: false,
    grabCursor: true,
    preventClicks: false,
    preventClicksPropagation: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function () {
        stopAllVideos();
      }
    }
  });

  // Остановка всех видео
  function stopAllVideos() {
    var videos = document.querySelectorAll('.swiper-slide video');
    videos.forEach(function (video) {
      video.pause();
    });
  }

  // Обработчик события для кнопки воспроизведения видео
  var playButtons = document.querySelectorAll('.play-button');
  playButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var slide = button.closest('.swiper-slide');
      var video = slide.querySelector('video');
      video.play();
      swiper.slideNext(); // Переходим к следующему слайду после начала воспроизведения видео
    }
  }
  )