// document는 html로 봐도 이해 가능
const searchEl = document.querySelector('.search');

const searchInputEl = searchEl.querySelector('input');

// 클릭 시 이벤트
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

// 클릭 시 통합검색 표시
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  // Attribute = html 속성
});

// 클릭 해제 시 통합검색 미표시
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 배지, 버튼 관련
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });    
    // 버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기!
    gsap.to('#to-top', .2, {
      x: 100
    });
  }  
}, 300));
// throttle = lodash 제공 , 300 = 0.3초 => 즉 일정시간 동안 1번씩 실행 되도록 제한
// _.throttle(함수, 시간)


// 최상단 이동 버튼
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0,    
  });
});


// 순차적으로 이미지 출력
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 ...
    opacity: 1
  });
});


// Swiper (자동넘김)
new Swiper('.notice-line .swiper-container', {   // new Swiper(선택자, 옵션)
  direction: 'vertical',
  autoplay: true,
  loop: true  
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 4500
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어(클릭가능)
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  direction: 'horizontal', // default로 생략 가능
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 한번에 5개 화면 출력
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
})


// 프로모션 토글 처리
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수접 2자리까지)
function random(min, max) {
  // .toFixed() 를 통해 반환된 문자 데이터를,
  // parseFlat() 을 통해 소수점을 가지는 숫자 데이터로 변환  
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// floating1,2,3 애니메이션
function floatingObject(selector, delay, size) {  
  gsap.to(selector, random(1.5, 2.5), {   // gsap.to(요소, 시간, 옵션);
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut, // gsap Easing 라이브러리
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic (스크롤 위치에 대한 이벤트)
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  // new ScrollMagic.Scene({}).setClassToggle().addTo();를 개행 처리
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8         // Hook할 위치 지정(위에서 80% 부분)      
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// 년도 변경 함수
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
