 ! function() {
     if (!getQueryString('openId')) {
         window.location = "http://a.weixin.hndt.com/wx/index?cate=person";
     }
     function getQueryString(name) {
         let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
         let r = window.location.search.substr(1).match(reg);
         if (r != null) return unescape(r[2]);
         return null;
     }
 }()