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
        <el-footer class="redBorder">Footer</el-footer>
      </div>
    </div>
<!--
    <div class="main-content redBorder">
      <el-container>
        <el-header height="120px" class="redBorder" style="padding:0;">
          <headerView :permission="1"></headerView>
        </el-header>
      </el-container>
      <div>
        <el-container>
          <el-main class="main redBorder">
            <div style="float:right;">
              <userInfoView v-if='isLogin'></userInfoView>
              <loginView v-else v-on:login="onChildLogin"></loginView>
            </div>
          </el-main>


          <el-footer class="redBorder">Footer</el-footer>
        </el-container>
      </div>
    </div> -->
  </div>
</template>

<script>
// asddsa123654
// asddsa123456
import headerView from './components/header.vue'
import loginView from './components/login.vue'
import userInfoView from './components/userInfo.vue'

import qs from 'qs'
export default {
  components:{
    headerView, loginView, userInfoView
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
$footerHeight: 400px;

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
  height: $headerHeight;
  padding: 0;
}
.main {
  padding: 0;
  z-index:10;
  width:100%;
  height: 1000px;
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

}

/*.main-content {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}
.main {
  background:url('./assets/main_bg.png') no-repeat center;
}
.redBorder {
  border: 1px solid red;
}*/
</style>
