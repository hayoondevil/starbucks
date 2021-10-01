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
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }  
}, 300));
// throttle = lodash 제공 , 300 = 0.3초 => 즉 일정시간 동안 1번씩 실행 되도록 제한
// _.throttle(함수, 시간)

