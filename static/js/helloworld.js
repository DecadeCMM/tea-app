window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"24"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
$(function(){
  //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
  $(function () {
      $(window).scroll(function(){
          if ($(window).scrollTop()>window.screenTop){
              $(".topButton").fadeIn(500);
          }
          else
          {
              $(".topButton").fadeOut(500);
          }
      });

      //当点击跳转链接后，回到页面顶部位置
      $(".topButton").click(function(){
          //$('body,html').animate({scrollTop:0},1000);
  if ($('html').scrollTop()) {
          $('html').animate({ scrollTop: 0 }, 1000);
          return false;
      }
      $('body').animate({ scrollTop: 0 }, 1000);
           return false;
     });
});
});
