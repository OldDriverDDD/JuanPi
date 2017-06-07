<template>
  <div id="app">
     <div class="tabbar">
        <li v-for="(item,index) in barInfo" @click="show(item, index)">
           <img :src="(index == currentIndex) ? item.act_icon : item.bg_icon" alt="" />
           <p>{{ item.title }}</p>
        </li>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      hashData: ['/today','/direct','/global','/car','/mine'],
      barInfo: null,
      currentIndex: 0
    }
  },
  methods: {
    show(item, index) {

      this.$router.push(item.hashValue)

      this.currentIndex = index;
    }
  },
  created() {
    this.axios.get('/static/data/tapbar.json').then(res => {
        res.data.menu_list.map((item, i) => {
          item.hashValue = this.hashData[i]
        })
        console.log(res.data.menu_list);
        this.barInfo = res.data.menu_list;

    })
  }
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
      border-top: 1px solid #f4f4f8;
      z-index: 2;
  }
  #app .tabbar li {
    list-style: none;
    height: 147px;
    text-align: center;
  }
  #app .tabbar li img {
    width: 72px;
    height: 72px;
    position: relative;
    top: -15px;
  }
  #app .tabbar p {
    text-decoration: none;
    font-size: 30px;
    position: relative;
    top: -33px;
  }

</style>
