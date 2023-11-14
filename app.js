document.addEventListener("DOMContentLoaded", function () {
    // 홈 링크 부드럽게 올라가기
    var homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener("click", function (event) {
      event.preventDefault();
      navigateToPage('main.html');
    });
  
    // 고양이 소개 눌렀을때
    var catIntroductionLink = document.querySelector('a[href="#about"]');
    catIntroductionLink.addEventListener("click", function (event) {
      event.preventDefault();
      navigateToPage('cat_introduction.html');
    });

    // 고양이 갤러리 눌렀을때
  var catGalleryLink = document.querySelector('a[href="#gallery"]');
  catGalleryLink.addEventListener("click", function (event) {
    event.preventDefault();
    navigateToPage('cat_gallery.html');
  });

  // 고양이 문의 눌렀을때
  var catContactLink = document.querySelector('a[href="#contact"]');
  catContactLink.addEventListener("click", function (event) {
    event.preventDefault();
    navigateToPage('cat_contact.html');
  });

  
    // 다른 코드들...
  
    // 페이지로 이동하는 함수
    function navigateToPage(page) {
      window.location.href = page;
    }
  });