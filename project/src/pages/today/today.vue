<template>
	<div id="today">
		<!-- 头部广告 -->
		<div class="bannerBar">
			<img :src="topBanner" >
		</div>
		<!-- logo -->
		<div class="logo">
	   	   <img src="../../../static/hyimages/top-logo.png" class="logoImg">
	   </div>
	   <ul class="topBar">
			<li v-for="item in data " class="topbarli">{{ item.title }}</li>
		</ul>
		<div class="swipper"></div>
		<ul class="modelBar">
			<li v-for = "(item,index) in navBar ">
				<a >
					<img :src="item.pic">
					<p>{{ item.words }}123</p>
				</a>
			</li>
		</ul>
		<!-- 直发仓，量贩超市，每日抽奖 -->
		<ul class="adslist">
			<li v-for = "(item,index) in adsList">
				<img :src="item.pic">
			</li>
		</ul>	
		<div>
			<img :src="gtopList.pic">
		</div>
		<!-- 商品列表 -->
		<ul class="goodlist">
			<li>
				<div>
					<img src="" alt="" class="goodPic">
					<img src="" alt="" class="goodlogo">
				</div>
				<div>
					<p></p>
					<h3></h3>
				</div>
			</li>
		</ul>
		<dress router-link to ="/dress"></dress>
	</div>
</template>

<script>
import Dress from "./dress"
	export default{
		data(){
			return {
				topBanner:"",
				navBar:[],
				adsList:[],
				gtopList:[],
				data:[]
			}
		},
		created(){
			this.axios.get('../../../static/data/indexmenu.json').then(res=>{
				this.data = res.data.menu_list[0].subtab;
			})

			this.axios.get('../../static/data/lunbo.json').then(res=>{
				console.log(res.data.module_ads.multi_block[2].data[0].child);
				this.topBanner = res.data.topbanner.pic_url;
				this.navBar = res.data.module_ads.multi_block[0].data[0].child;
				this.adsList =  res.data.module_ads.multi_block[1].data[0].child;
				this.gtopList =  res.data.module_ads.multi_block[2].data[0].child[0];
			})
		},
		components:{
			Dress
		}

	}
</script>

<style scoped >
	/*上面的logo部分*/
	.logo{
		width: 100%;
		height: 1rem;
		padding-left: 1.08rem;
		padding-right: 1.08rem;
		padding-top:0.3rem;
		background-color: #fff; 
	}
	.logoImg{
		height: 0.72rem;
		display: block;
		padding: 0.102564rem 0;
		text-align: center;
		padding-left: 3.9rem;

	}
	.topBar{
		display: flex;
		white-space: nowrap;
	    overflow: auto;
	    overflow-y: hidden;

	}
	.topbarli{
		font-size: 0.42rem;
		height: 1.14rem;
		line-height: 1.14rem;
		text-align: center;
		color: #333;
		white-space: nowrap;
		box-sizing:border-box;
		padding: 0 0.57rem;
		margin:auto;
		background-color: #fff;
		
	}
	#today ul li:hover{
		color: #ff464e;
		border-bottom: 0.04rem solid #ff464e;
	}


	.bannerBar{
		width: 100%;
		
	}
	.bannerBar img{
			width: 100%;
			display: block;
		}
	.modelBar{
		width: 100%;
	    padding: 0.38rem 0;
	    height: 1.90rem;
	    background-color: #fff;
		
		    
		
		
	}
	.modelBar li{
			width: 25%;
		    text-align: center;
		    float: left;
		    line-height: 0.71rem;
		    overflow: hidden;
		  }
	 .modelBar img{
		    	width: 1.20rem;
		    	height: 1.20rem;
		    }
	.modelBar a{
			font-size: 0.36rem;
			color: #666;
		}
	.adslist{
		height: 7.55rem;
		margin: 0.38rem 0 0.38rem 0;
		
	}
	.adslist img{
			display: block;
		    width: 49.9%;
		    float: left;
		}
    



	


</style>