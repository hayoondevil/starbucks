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