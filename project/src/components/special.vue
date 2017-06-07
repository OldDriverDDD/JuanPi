<template>
	<div id="special">
		<div class="topMU">
		<span class="resver"></span>
			<p>{{ id.id }}</p>
		<span class="dot"></span>
		</div>
		<div class="line"></div>
		<div class="nameSp">
		<dl>
			<dt><img src="../../static/hyimages/juanpi_files/591ea9b9ad0a49f15d8b45d5_180x90.png"></dt>
			<dd>佣金女装专场</dd>
			<dd>共89件商品</dd>
		</dl>
		<div class="enter">
			进入专场
			<span>＞</span>
		</div>
	</div>
	</div>
	

</template>
<script type="text/javascript">
	export default{
		name:'special',
		data(){
			return{
				id:this.$route.params
				// console.log(id)
			}
		},
		methods:{

		}
	}
</script>
<style type="text/css">
	.line{
		width: 100%;
		height: 0.3rem;
		background-color: #f4f4f8;
	}
	/*顶部菜单*/
	.topMU{
		width: 100%;
		height: 1.32rem;
		line-height: 1.32rem;
		font-size: 54px;
		padding-right: 1.08rem;
		padding-left: 108px;
		box-sizing:border-box;
		background-color: #fff;
		text-align: center;
		position: relative;

	}
	.resver{
		font-family: "juanPiIco";
		font-size: 0.7rem;
		position: absolute;
		left: 0.3rem;
	}
	.resver:before{
		content:"\e60b";
	}
	.dot{
		font-family: "juanPiIco";
		font-size: 0.7rem;
		position: absolute;
		right: 0.3rem;
		top:0.1rem;
	}
	.dot:before{
		content:"\e60e";
	}
	.nameSp{
		width: 100%;
		padding-bottom: 0.42rem;
		padding-top: 42px;
		padding-right: 0.42rem;
		padding-left: 0.42rem;
		box-sizing:border-box;
		font-size: 0.42rem;
		background-color: #fff;

	}
	.nameSp dl{
		width: 60%;
		display: inline-block;

	} 
	.nameSp dl dt{
		
		height: 1.35rem;
		line-height: 1.35rem;
		width: 1.35rem;
		border:1px solid #e7e7e7;
		vertical-align: middle;
		float: left;
		margin-right: 0.3rem;
		font-size: 0.42rem;
	}
	.nameSp dl dt img{
		width: 100%;
		display: block;
		top: 50%;
		left: 50%;
		border:0;
		margin-top: 0.3rem;
	}
	.nameSp dl dd:nth-of-type(1){
		line-height: 0.6rem;
		height: 0.9rem;
		font-size: 0.42rem;

	}
	.nameSp dl dd:nth-of-type(2){
		line-height: 0.45rem;
		height: 0.45rem;
		font-size: 0.3rem;
		color: #666;
		text-align: left;


	}
	.enter{
		float: right;
		position: relative;
		top: 0.18rem;
		line-height: 1;
		vertical-align: middle;
		display: inline-block;
		padding-left: 0.3rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		border:1px solid #4a4a4a;
		color: #666;
		font-size: 0.33rem;


	}
	.enter span{
		float: right;
		margin-right: 0.1rem;
		margin-left: 0.3rem;
	}
</style>