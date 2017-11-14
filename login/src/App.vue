<template>
  <div id="app" class="container">
    <div class="header">
      <div class="wrapper">
        <headerView :permission="1"></headerView>
      </div>
    </div>
    <div class="main" >
      <div class="wrapper">
        <div class="login-content">
          <userInfoView v-if='isLogin'></userInfoView>
          <loginView v-else v-on:login="onChildLogin"></loginView>
        </div>
      </div>
    </div>
    <div class="main2" >
      <div class="wrapper">

        <!-- <div id="banner"> -->
          <div id="news">
            <div class="news-icon" title="News">
              <div id="hot-news">
                <!-- <marquee id="affiche" align="left" behavior="scroll" bgcolor="#FF0000" direction="up" height="300" width="200" hspace="50"
                vspace="20" loop="-1" scrollamount="10" scrolldelay="100" onMouseOut="this.start()" onMouseOver="this.stop()"> -->
                <marquee align="left" height="40" width="930" direction="left"
                 scrollamount="15" scrolldelay="200" onMouseOut="this.start()" onMouseOver="this.stop()">
                <a style="color:#fbc85b;line-height:40px;" @click="onShowDetailNews">{{ $WebInfo.news.prompt }}</a>
                </marquee>
                <!-- <a href="javascript: void(0)" ng-click="newsClick()">{{ $WebInfo.news.prompt }}</a> -->
              </div>
            </div>
          </div>
        <!-- </div> -->

        <el-carousel class="carousel" :interval="3000" type="card" height="300px" indicator-position='none' arrow='never'>
          <el-carousel-item v-for="item in 3" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="footer">
      <div class="wrapper">
        <footerView></footerView>
      </div>
    </div>
  </div>
</template>

<script>
// asddsa123654
// asddsa123456
import headerView from './components/header.vue'
import loginView from './components/login.vue'
import userInfoView from './components/userInfo.vue'
import footerView from './components/footer.vue'

import qs from 'qs'
export default {
  components:{
    headerView, loginView, userInfoView, footerView
  },
  data() {
    return {
      isLogin: false,
    }
  },
  computed: {
    // passwordType: function() {
    //   return this.isShowPassword ? 'text' : 'password'
    // }
  },
  methods: {
    onShowDetailNews: function() {
      this.$alert(this.$WebInfo.news.formatPrompt, 'News', {
         dangerouslyUseHTMLString: true,
        confirmButtonText: '知道了',
      });
    },
    onChildLogin: function({error, errorMsg}) {
      console.log(0);
      if (!error) {
        console.log(1);
        this.isLogin = true
      }else {
        console.log(2);
        this.$alert(errorMsg, '出错了', {
          confirmButtonText: '好的',
          callback: action => {
          }
        });
      }
    }
  },
  mounted: function() {
    // get from session
    this.isLogin = false
  },
}
</script>

<style lang="scss">
$wrapperWidth: 1000px;
$headerHeight: 120px;
$mainHeight: 442px;
$main2Height: 400px;
$footerHeight: 350px;

#app {
  background:#2f1c20;
  font-family:'Microsoft YaHei',Arial,sans-serif;font-size:12px;overflow-x:hidden;
}
.wrapper {
  position: relative;
  width: $wrapperWidth;
  margin: 0 auto;
}
.header {
  padding: 0;
  height: $headerHeight;
}
.main {
  padding: 0;
  z-index:10;
  width:100%;
  height: $mainHeight;
  background:url('./assets/main_bg.png') repeat-x center top;
  .login-content {
    padding: 30px 0 0 5px;
    width: 235px;
    height: 242px;
    background:url('./assets/login_bg.png') no-repeat center;
    float: right;

    .el-input__inner{
      height: 34px;
    }
    .el-form-item__error{
      padding-top: 0;
    }
    .el-form-item{
      margin-bottom: 14px;
    }

    // .el-form-item.is-error .el-input__inner, .el-form-item.is-error .el-input__inner:focus, .el-form-item.is-error .el-textarea__inner, .el-form-item.is-error .el-textarea__inner:focus, .el-message-box__input input.invalid, .el-message-box__input input.invalid:focus{
    //   border: 0 none;
    // }
  }
}

.main2 {
  padding: 0;
  z-index:10;
  width:100%;
  height: $main2Height;
  background:url('./assets/main2_bg.jpg') repeat-x center top;

  #news{
    position:relative;width:100%;height:40px
  }
  #news .news-icon:before{
    content:attr(title);background:url('./assets/new_img.png') no-repeat left center;
    padding-left:20px;
    color:#ffd053;
    font-size:14px;text-align:left;line-height:40px
  }
  #hot-news{
    float:right;height:40px;width:930px;white-space:nowrap;overflow:hidden
  }
  #hot-news a{
    color:#fff;font-size:14px;text-decoration:none;line-height:40px
  }
  #hot-news a:hover{
    text-decoration:underline
  }
  .marqueen{
    height: 40px;
    line-height: 40px;
  }
  .carousel {
    padding-top: 50px;
    width: 80%;
  }
  .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.5;
      line-height: 200px;
      margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
.footer {
  padding: 0;
  z-index:10;
  width:100%;
  height: $footerHeight;
  background:#221316 url('./assets/footer_bg.jpg') no-repeat center top;
}
</style>
