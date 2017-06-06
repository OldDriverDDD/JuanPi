<template>
<div id="new">
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
		<div class="goodtopList">
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
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				topBanner:"",
				navBar:[],
				adsList:[],
				gtopList:[],
				goodList:[]
				
			}
		},
		created(){

			this.axios.get('../../static/data/lunbo.json').then(res=>{
				console.log(res.data.module_ads.multi_block[2].data[0].child);
				this.topBanner = res.data.topbanner.pic_url;
				this.navBar = res.data.module_ads.multi_block[0].data[0].child;
				this.adsList =  res.data.module_ads.multi_block[1].data[0].child;
				this.gtopList =  res.data.module_ads.multi_block[2].data[0].child[0];
			}),
			this.axios.get('../../static/data/todaylist.json').then(res=>{
				console.log(res);
			})
		},
		// components:{
		// 	Dress
		// }

	}

</script>
<style type="text/css">
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
    .goodtopList img{
    	width: 100%;
    }

</style>