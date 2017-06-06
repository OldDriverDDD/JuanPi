<template>
	<div id="direct">
		<div class="header">
			<span>生活仓库</span>
			<i></i>
		</div>
		<ul class="bannerF" v-for="item in bannerDataO">
			<li><img :src="item.pic" alt=""></li>
		</ul>
		<ul v-for="item in bannerDataT">
			<li><img :src="item.pic" alt=""></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "direct",
		data(){
			return {
				bannerDataO: [],
				bannerDataT: []
			}
		},
		created(){
			this.axios.get('../static/data/directBanner.json').then(res => {
				// this.data = res.module_ads.multi_block.data.child;
				this.bannerDataO = res.data.module_ads.multi_block[0].data[0].child;
				this.bannerDataT = res.data.module_ads.multi_block[1].data[0].child;

				console.log(res.data.module_ads.multi_block[1].data[0].child);
			},err => {
				console.log(err);
			})
		}
	}
</script>

<style>
	#direct{
		font-family: "微软雅黑";
	}
	#direct .header span{
		font-size: 54px;
	}
</style>