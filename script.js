//ハンバーガーメニュー
  $(document).ready(function(){
    //id#btnをクリックしたとき
    $("#btn").on("click",function(){
      //id#navのリストがスライドする
      $("#nav").slideToggle();
      //class.menu-triggerのCSSに書いた情報が適用される
      $(".menu-trigger").toggleClass("active");
      //ページ更新しない
      return false;
    });
  });
//ハンバーガーメニューここまで

//拡大表示
$(function(){
  $(".mini-image").click(function(){
    $(this).next(".hide-image").fadeIn(1000);
    $(".fullcolor").addClass("active");
  });
  $(".fullcolor,.hide-image").click(function(){
    $(".hide-image").fadeOut(200);
    $(".fullcolor").removeClass("active");
  });
});
