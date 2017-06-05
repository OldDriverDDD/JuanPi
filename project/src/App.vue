<template>
  <div id="app">
     <div class = "tabbar">
        <router-link to = "/today">今日上新</router-link>
        <router-link to = "/direct">直发仓</router-link>
        <router-link to = "/global">全球购</router-link>
        <router-link to = "/car">购物车</router-link>
        <router-link to = "/mine">我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
 
}
</script>

<style>
   #app .tabbar{
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      height: 147px;
      display: flex;
      align-items:center;
      justify-content:space-around;
      background-color: #fff;
      color: gray; 
      line-height: 147px;
      border-top: 1px solid #f4f4f8;
  }
 #app .tabbar a {
    text-decoration: none;
    font-size: 36px;
  }

</style>
