<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-12">
        <h1>Routing</h1>
        <appHeader></appHeader>
        <!-- <router-view name="Header-top"></router-view> -->
        <router-view></router-view>
        <!-- <router-view name="Header-bottom"></router-view> -->
        <div class="d-none">
          <appUser></appUser>
          <UserDetail></UserDetail>
          <UserEdit></UserEdit>
          <UserStart></UserStart>
          <HomeComp></HomeComp>
        </div>
     
      
      </div>

    </div>
   
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import appUser from './components/UserApp.vue';
import UserDetail from './components/UserDetail.vue';
import UserEdit from './components/UserEdit.vue';
import UserStart from './components/UserStart.vue';
import HomeComp from './components/HomeComp.vue';
import appHeader from './components/appHeader.vue'

export default {
  name: 'App',
  components: {
    appUser,
    UserDetail,
    UserEdit,
    UserStart,
    HomeComp,
    appHeader
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
