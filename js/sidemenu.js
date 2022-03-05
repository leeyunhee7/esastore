document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".sidemenu").addEventListener("click", function (e) {
        if (document.querySelector('.sidemenuwrap').classList.contains('on')) {
            //메뉴닫힘
            document.querySelector('.sidemenuwrap').classList.remove('on');
            document.querySelector('.sidemenu i').classList.remove('menu_x')
            document.querySelector('.sidemenu i').classList.add('menu');

            //페이지 스크롤 락 해제
            document.querySelector('#dimmed').remove();
        } else {
            //메뉴펼침
            document.querySelector('.sidemenuwrap').classList.add('on');
            document.querySelector('.sidemenu i').classList.remove('menu');
            document.querySelector('.sidemenu i').classList.add('menu_x');

            //페이지 스크롤 락 레이어 추가
            let div = document.createElement('div');
            div.id = 'dimmed';
            document.body.append(div);

            //페이지 스크롤 락  모바일 이벤트 차단
            document.querySelector('#dimmed').addEventListener('scroll touchmove touchend mousewheel', function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });

            //페이지 스크롤 락 레이어 클릭 메뉴 닫기
            document.querySelector('#dimmed').addEventListener('click', function (e) {
                document.querySelector(".sidemenu").click();
            });

        }
    });
});

//body(stop_scroll)스크롤링 멈춤
//function lockScroll() {
//    if ($('.stop_scroll').hasClass('lock-scroll')) {
//        $('.stop_scroll').removeClass('lock-scroll');
//    } else {
//        $('.stop_scroll').addClass('lock-scroll');
//    }
//
//}
//
//$(document).ready(function() {
//    $('.menu').click(function() {
//       lockScroll();
//    }); 
//});
