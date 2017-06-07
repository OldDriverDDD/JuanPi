<template>
	<div id="direct">
		<div class="header">
			<span>生活仓库</span>
			<i></i>
		</div>
		<!-- banner1 -->
		<ul class="bannerO">
			<li v-for="item in bannerDataO"><img :src="item.pic" alt=""></li>
		</ul>
		<!-- banner2 -->
		<ul class="bannerT">
			<li v-for="item in bannerDataT"><img :src="item.pic" alt=""></li>
		</ul>
		<!-- banner装扮 -->
		<ul class="bannerTh">
			<li v-for="item in bannerDataTh"><img :src="item.pic" alt=""></li>
		</ul>
		<ul class="bannerF">
			<li v-for="item in bannerDataF"><img :src="item.pic" alt=""></li>
		</ul>
		<!-- banner美食 -->
		<ul class="bannerTh">
			<li v-for="item in bannerDataFm"><img :src="item.pic" alt=""></li>
		</ul>
		<ul class="bannerF">
			<li v-for="item in bannerDataFmn"><img :src="item.pic" alt=""></li>
		</ul>
		<!-- banner清洁 -->
		<ul class="bannerTh">
			<li v-for="item in bannerDataFqj"><img :src="item.pic" alt=""></li>
		</ul>
		<ul class="bannerF">
			<li v-for="item in bannerDataFqjn"><img :src="item.pic" alt=""></li>
		</ul>
		<!-- banner餐厨 -->
		<ul class="bannerTh">
			<li v-for="item in bannerDataFc"><img :src="item.pic" alt=""></li>
		</ul>
		<ul class="bannerF">
			<li v-for="item in bannerDataFcn"><img :src="item.pic" alt=""></li>
		</ul>
		<!-- time -->
		<div class="day_time">
			<img :src="timeData.pic" alt="">
		</div>
		<!-- sort_price -->
		<div class="sort_price">
			<ul>
				<li class="moren">
					<span></span>
				</li>
				<li class="price">
					<span></span>
					<i></i>
					<i></i>
				</li>
				<li class="">
					<span></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "direct",
		data(){
			return {
				bannerDataO: [],	//1
				bannerDataT: [],	//2
				bannerDataTh: [],	//3
				bannerDataF: [],
				bannerDataFm: [],	//4
				bannerDataFmn: [],
				bannerDataFqj: [],	//5
				bannerDataFqjn: [],
				bannerDataFc: [],	//6
				bannerDataFcn: [],
				timeData: []
			}
		},
		created(){
			this.axios.get('../static/data/directBanner.json').then(res => {
				this.bannerDataO = res.data.module_ads.multi_block[0].data[0].child;	//banner1
				this.bannerDataT = res.data.module_ads.multi_block[1].data[0].child;	//banner2
				this.bannerDataTh = res.data.module_ads.multi_block[2].data[0].child;	//banner装扮
				this.bannerDataF = res.data.module_ads.multi_block[3].data[0].child;
				this.bannerDataFm = res.data.module_ads.multi_block[4].data[0].child;	//banner美食
				this.bannerDataFmn = res.data.module_ads.multi_block[5].data[0].child;
				this.bannerDataFqj = res.data.module_ads.multi_block[6].data[0].child;	//banner清洁
				this.bannerDataFqjn = res.data.module_ads.multi_block[7].data[0].child;
				this.bannerDataFc = res.data.module_ads.multi_block[8].data[0].child;	//banner清洁
				this.bannerDataFcn = res.data.module_ads.multi_block[9].data[0].child;
				this.timeData = res.data.module_ads.multi_block[10].data[0].child[0];
				 // console.log();
			},err => {
				console.log(err);
			})
		}
	}
</script>

<style>
	#direct{
		font-family: "微软雅黑";
		background-color: #f4f4f8;
		padding-bottom: 148px;
	}
	@font-face{
		font-family: "juanPiIco";
		src: url("../../../static/iconfont.woff");
	}
	#direct .header{
		width: 100%;
		height: 1.32rem;
		line-height: 1.32rem;
		position: relative;
		background-color: #fff;
		border-bottom: 1px solid #dedede;
	}
	#direct .header span{
		position: absolute;
		left: 5%;
		width: 10.26rem;
		padding: 0 1.08rem;
		text-align: center;
		height: 100%;
		font-size: 54px;
		vertical-align: top;
		color: #333;
	}
	#direct .header i{
		display: block;
		font-style: normal;
		font-family: "juanPiIco";
		color: #666;
		font-size: 72px;
		float: right;
		margin-right: 0.47rem;
	}
	#direct .header i:before{
		content: "\e61c";
	}
	#direct .bannerO{
		width: 100%;
		height: 4.76rem;
	}
	#direct .bannerO li{
		display: inline-block;
	}
	#direct .bannerO li:nth-of-type(2){
		border-left: 1px solid #dedede;
		border-right: 1px solid #dedede;
	}
	#direct .bannerO img{
		display: block;
		height: 4.76rem;
	}
	#direct .bannerT{
		width: 100%;
		height: 3.97rem;
		margin-top: 0.39rem;
	}
	#direct .bannerT li{
		display: inline-block;
	}
	#direct .bannerT img{
		display: block;
		height: 3.97rem;
	}
	#direct .bannerTh{
		width: 100%;
		height: 1.49rem;
		margin-top: 0.39rem;
	}
	#direct .bannerTh img,#direct .bannerTh li{
		height: 1.49rem;
	}
	#direct .bannerF{
		width: 100%;
		height: 4.14rem;
	}
	#direct .bannerF img,#direct .bannerF li{
		height: 4.14rem;
	}
	#direct .day_time{
		width: 100%;
		height: 1.59rem;
		margin-top: 0.39rem;
	}
	#direct .day_time img{
		height: 1.59rem;
	}
</style>