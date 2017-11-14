<template>
  <div class="footer">
    <ul id="footer-info" style="display:flex;flex-flow:row;justify:center;">
      <li class="tel">{{ $WebInfo.contact.tel }}</li>
      <li class="mail">{{ $WebInfo.contact.email }}</li>
      <li class="qq">{{ $WebInfo.contact.qq }}</li>
      <li class="chat">{{ $WebInfo.contact.support }}</li>
    </ul>

    <div id="footer-logo"></div>

    <ul id="footer-nav">
      <li><a href="/AboutUS">ABOUT US</a></li>
      <li><a href="/Contact">CONTACT US</a></li>
      <li><a href="/Partner">AFFILIATION</a></li>
      <li><a href="/How/Deposit">HOW TO DEPOSIT</a></li>
      <li><a href="/How/Withdrawal">HOW WITHDRAWALS</a></li>
      <li><a href="/FAQ">FAQ</a></li>
      <li><a href="/ResponsibleGambling">Responsible Gambling</a></li>
      <li><a href="/Guide">CHARITABLE</a></li>
      <!-- <li class="download"><a ng-href="{{ContactInfo.HttpInformation ==''?'#': ContactInfo.HttpInformation}}" target="_blank">DOWNLOAD</a></li> -->
      <!-- <li><a ng-href="{{ContactInfo.HttpDetection ==''?'#': ContactInfo.HttpDetection}}" target="_blank">Network Detect</a></li>
      <li><a href="http://gpk-client.com/" target="_blank">CLIENT</a></li> -->
    </ul>

    <div id="footer-suggest">Copyright &#169; 众赢娱乐城 Reserved</div>

    <div class="footer-slogan"></div>
    <div class="footer-service"></div>
  </div>
</template>

<script>
export default {
  name: 'footer-view',
}
</script>

<style lang="scss">
$footerHeight: 350px;
#footer{
  height: $footerHeight;
}
#footer-info>li{
  position:relative;float:left;
  width:120px;
  height:45px;
  text-align: left;
  color:#f5ad90;
  font-size:14px;
  line-height:46px;
}
// #footer-info>li+li:before{
//   content:'';display:inline-block;position:absolute;top:18px;right:100%;width:1px;height:10px;background:#f5ad90
// }
#footer-info>li:hover{
  color:#ffd053
}
#footer-info>li.tel{
  padding-left: 82px;
  background-image:url('../assets/contact_bg_tel.png');background-repeat:no-repeat;background-position:left center;
  background-position-x:25px;
}
#footer-info>li.mail{
  margin-left: 100px;
  padding-left: 72px;
  background-image:url('../assets/contact_bg_email.png');background-repeat:no-repeat;background-position:left center;
}
#footer-info>li.qq{
  margin-left: 100px;
  padding-left: 50px;
  background-image:url('../assets/contact_bg_qq.png');background-repeat:no-repeat;background-position:left center;
}
#footer-info>li.chat{
  margin-left: 40px;
  padding-left: 92px;
  background-image:url('../assets/contact_bg_support.png');background-repeat:no-repeat;background-position:left center;
}
#footer-logo{
  display:inline-block;width:100%;height:80px;background:url('../assets/footer_logo.png') no-repeat center bottom
}
#footer-nav{
  display:block;text-align:center;margin:10px auto
}
#footer-nav li{
  display:inline-block
}
#footer-nav li+li:before{
  content:'|';padding:0 15px;color:#f5ad90
}
#footer-nav a{
  color:#f5ad90;font-size:12px;text-align:center;text-decoration:none
}
#footer-nav a:hover{
  color:#ffd053;transition:all .4s
}
#footer-suggest{
  display:block;margin:0 auto;color:#83523e;font-size:12px;line-height:25px;text-align:center
}
.footer-slogan{
  height:60px;background:url('../assets/footer_slogan.jpg') no-repeat center
}
.footer-service{
  height:70px;background:url('../assets/footer_service.jpg') no-repeat center
}

</style>
