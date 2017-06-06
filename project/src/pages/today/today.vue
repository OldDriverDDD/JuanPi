<template>
	<div id="today">
		<div class="bannerBar">
			<img :src="topBanner" >
		</div>
		<div class="logo"></div>
		<div class="topbar"></div>
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
	</div>
</template>

<script>
	export default{
		data(){
			return {
				topBanner:"",
				navBar:[],
				adsList:[],
				gtopList:[]
			}
		},
		created(){

			this.axios.get('../../static/data/lunbo.json').then(res=>{
				console.log(res.data.module_ads.multi_block[2].data[0].child);
				this.topBanner = res.data.topbanner.pic_url;
				this.navBar = res.data.module_ads.multi_block[0].data[0].child;
				this.adsList =  res.data.module_ads.multi_block[1].data[0].child;
				this.gtopList =  res.data.module_ads.multi_block[2].data[0].child[0];
			})
		}
	}
</script>

<style lang = "less" >
	.bannerBar{
		width: 100%;
		img{
			width: 100%;
			display: block;
		}
	}
	.modelBar{
		width: 100%;
	    padding: 38px 0;
	    height: 190px;
	    background-color: #fff;
		li{
			width: 25%;
		    text-align: center;
		    float: left;
		    line-height: 71px;
		    overflow: hidden;
		    img{
		    	width: 120px;
		    	height: 120px;
		    }
		}
		a{
			font-size: 36px;
			color: #666;
		}
	}
	.adslist{
		height: 755px;
		margin: 38px 0 38px 0;
		img{
			display: block;
		    width: 49.9%;
		    float: left;
		}
	}
    
</style>