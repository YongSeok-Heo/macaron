$(function () {
  var current = 0;
  var thumbListSize = 6; //보이는 썸네일갯수
  var con2 = $(".con2"); //슬라이드 영역
  var prev = con2.find(">.left"); //왼쪽으로 가는 화살표
  var next = con2.find(">.right"); //오른쪽으로 가는 화살표
  var content2 = con2.find(">.content2>ul"); //상품 이미지 영역

  //썸네일들을 overflow:hidden으로 가리고 있는 .container 요소의 너비를구해  이전, 다음 버튼을 누를때마다 이동해야할 거리로 사용
  var containWidth = con2.find(">.content2").width();

  var thumb = content2.find(">.thumb"); //작은 이미지
  var maxSize = thumb.size(); //썸네일 전체갯수

  //다음 버튼이 클릭되면 현재페이지 번호를 1씩 증가
  next.on("click", function () {
    if (current < maxSize / thumbListSize - 1) current++;
    listMove();
    //다음 버튼에 클릭이벤트가 일어나면 다음 페이지가 존재하는지 여부를 따져
    //존재한다면 현재 페이지를 1증가
    //0부터 시작하므로 -1을 뺌
  });

  //이전 버튼이 클릭되면 현재페이지번호를 1씩 감소
  prev.on("click", function () {
    if (current > 0) current--;
    listMove();
  });

  function listMove() {
    var tl = containWidth * current * -1;
    content2.stop().animate({ left: tl }, { duration: 400, easing: "easeOutCubic" });
  }
});

if ($(window).width() < 1180) {
  //width 값이 1180px 아래일 때
  $(function () {
    var current = 0;
    var thumbListSize = 4; //보이는 썸네일갯수
    var con2 = $(".con2"); //슬라이드 영역
    var prev = con2.find(">.left"); //왼쪽으로 가는 화살표
    var next = con2.find(">.right"); //오른쪽으로 가는 화살표
    var content2 = con2.find(">.content2>ul"); //상품 이미지 영역

    //썸네일들을 overflow:hidden으로 가리고 있는 .container 요소의 너비를구해  이전, 다음 버튼을 누를때마다 이동해야할 거리로 사용
    var containWidth = con2.find(">.content2").width();

    var thumb = content2.find(">.thumb"); //작은 이미지
    var maxSize = thumb.size(); //썸네일 전체갯수

    //다음 버튼이 클릭되면 현재페이지 번호를 1씩 증가
    next.on("click", function () {
      if (current < maxSize / thumbListSize - 1) current++;
      listMove();
      //다음 버튼에 클릭이벤트가 일어나면 다음 페이지가 존재하는지 여부를 따져
      //존재한다면 현재 페이지를 1증가
      //0부터 시작하므로 -1을 뺌
    });

    //이전 버튼이 클릭되면 현재페이지번호를 1씩 감소
    prev.on("click", function () {
      if (current > 0) current--;
      listMove();
    });

    function listMove() {
      var tl = containWidth * current * -1;
      content2.stop().animate({ left: tl }, { duration: 400, easing: "easeOutCubic" });
    }
  });
}
if ($(window).width() < 780) {
  //width 값이 780px 아래일 때
  $(function () {
    var current = 0;
    var thumbListSize = 2; //보이는 썸네일갯수
    var con2 = $(".con2"); //슬라이드 영역
    var prev = con2.find(">.left"); //왼쪽으로 가는 화살표
    var next = con2.find(">.right"); //오른쪽으로 가는 화살표
    var content2 = con2.find(">.content2>ul"); //상품 이미지 영역

    //썸네일들을 overflow:hidden으로 가리고 있는 .container 요소의 너비를구해  이전, 다음 버튼을 누를때마다 이동해야할 거리로 사용
    var containWidth = con2.find(">.content2").width();

    var thumb = content2.find(">.thumb"); //작은 이미지
    var maxSize = thumb.size(); //썸네일 전체갯수

    //다음 버튼이 클릭되면 현재페이지 번호를 1씩 증가
    next.on("click", function () {
      if (current < maxSize / thumbListSize - 1) current++;
      listMove();
      //다음 버튼에 클릭이벤트가 일어나면 다음 페이지가 존재하는지 여부를 따져
      //존재한다면 현재 페이지를 1증가
      //0부터 시작하므로 -1을 뺌
    });

    //이전 버튼이 클릭되면 현재페이지번호를 1씩 감소
    prev.on("click", function () {
      if (current > 0) current--;
      listMove();
    });

    function listMove() {
      var tl = containWidth * current * -1;
      content2.stop().animate({ left: tl }, { duration: 400, easing: "easeOutCubic" });
    }
  });
}
