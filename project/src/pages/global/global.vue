<template>
	<div id="global">
		<header>
			<span class = "headText">全球购</span>
		</header>
		<div class = "imgContainer">
			<div class = "first">
				<div v-for = "item in globalTop">
					
					<a href="" v-for = "item1 in item.data[0].child">
						<img :src="item1.pic" alt="">
					</a>
				</div>
			</div>
			<div class = "second">
				
			</div>
			<div class = "third">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "global",
		data(){
			return{
				globalTop:[]
			}
		},
		created(){
			this.axios.get("../static/data/globalTop.json").then(
				res=>{
					console.log(res.data.module_ads.multi_block);
					//console.log(res.data.module_ads.multi_block[0].data[0].child[0]);
					this.globalTop = res.data.module_ads.multi_block;
				});
		}
	}
</script>
<style>
	body{
		font-family: "微软雅黑";
	}
	#global {
		background: #f4f4f8;
	}
	header {
		height: 1.32rem;
		line-height:  1.32rem;
		width:100%;
		background: white;
		border-bottom: 1px solid #dedede;	
	}
	.headText{
		display:block;
		text-align: center;
		font-size: 0.54rem;
		color:#333;
	}
</style>