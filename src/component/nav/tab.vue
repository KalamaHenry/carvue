<template>
  <main>
    <!-- <v-home></v-home> -->
    <div class="nav">
      <router-link to="/home" @click.native.prevent="active = 'tab1'">
        <i class="iconfont icon-weibiaoti1"></i>
        <p>首页</p>
      </router-link> 
      <router-link to="/shopping" @click.native.prevent="active = 'tab2'">
        <i class="iconfont icon-mall"></i>
        <p>商城</p>
      </router-link> 
      <router-link to="/chat" @click.native.prevent="active = 'tab3'">
        <i class="iconfont icon-liaotian"></i>
        <p>聊天</p>
      </router-link> 
      <router-link to="/find" @click.native.prevent="active = 'tab4'">
        <i class="iconfont icon-faxian"></i>
        <p>发现</p>
      </router-link> 
      <router-link to="/my" @click.native.prevent="active = 'tab5'">
        <i class="iconfont icon-guanyuwomen"></i>
        <p>我的</p>
      </router-link> 
    </div>
  </main>
</template>
 
<script>
import home from '../content/home.vue'
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab1'
    };
  },
  components:{
    'v-home':home,
  }
};
</script>
 
<style lang="css" scoped>
.router-link-active{

}
.router-link-active i{
  color: purple;
}
.router-link-active p{
  color: red;
}
.mint-button--default{
  box-shadow: none;
}
a{
  text-decoration: none;
  color: #666;
}
.nav{
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  text-align: center;
  padding: 5px 20px;
  box-sizing: border-box;
}
.nav a{
  width: 20%;
}
</style>
