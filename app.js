document.addEventListener("DOMContentLoaded", function () {
    // 홈 링크 부드럽게 올라가기
    var homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener("click", function (event) {
      event.preventDefault();
      navigateToPage('cat_main.html');
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
  
    // 페이지로 이동하는 함수
    function navigateToPage(page) {
      window.location.href = page;
    }
  });

  document.getElementById('uploadForm').addEventListener('submit', function (event) {
    // 등록 버튼 클릭 시 cat_gallery.html로 이동
    event.preventDefault(); // 기본 폼 제출 동작 막기
    window.location.href = 'cat_gallery.html';
  });

  function cancelUpload() {
    // 취소 버튼 클릭 시 확인 후 cat_gallery.html로 이동
    if (confirm('작성 중인 내용이 있습니다. 정말로 취소하시겠습니까?')) {
      window.location.href = 'cat_gallery.html';
    }
  }

function goToList() {
  window.location.href = "cat_gallery.html";
}

function goToEdit() {
  window.location.href = "cat_password.html";
}

function checkPassword() {
  // 여기에 실제 비밀번호 검증 로직을 추가하세요.
  // 예시로 "password123"이라는 비밀번호로 설정했습니다.
  var enteredPassword = document.getElementById("password").value;
  var correctPassword = "password123";

  if (enteredPassword === correctPassword) {
    alert("비밀번호가 일치합니다. 페이지로 이동합니다.");
    window.location.href = "cat_write.html";
    // 비밀번호가 일치하면 원하는 페이지로 이동하도록 설정하세요.
    // window.location.href = "your_desired_page.html";
  } else {
    alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
  }
}