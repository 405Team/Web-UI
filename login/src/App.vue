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
$mainHeight: 800px;
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
}
.login-content {
  padding: 30px 0 0 5px;
  width: 235px;
  height: 242px;
  // border: 1px solid #2f1c20;
  background:url('./assets/login_bg.png') no-repeat center;
  float: right;
}
.footer {
  padding: 0;
  z-index:10;
  width:100%;
  height: $footerHeight;
  background:#221316 url('./assets/footer_bg.jpg') no-repeat center top;
}
</style>
