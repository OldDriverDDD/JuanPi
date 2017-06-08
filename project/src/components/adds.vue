<template>
	<div id = "adds">
		<header>
			<a href="javascript:;">
			<img src="../../static/addsImg/go_load_new.png">
			</a>
		</header>
		<nav>
			<span class = "first"></span>
			<span class = "second">童年时光三架马车专场专场</span>
			<span class = "third"></span>
		</nav>
		<div class = "detailContent">
			<div class = "detail">
				<div class = "detailW">
					<div class = "top">
						<span class = "topFirst">
							<img src="../../static/addsImg/58eee898ad0a49cf398b45cd_180x90.png">
						</span>
						<span class = "topSecond">
							<p class = "topText1">童年时光三架马车专场专场</p>
							<p class = "topText2">共7件商品</p>
						</span>
						<span class = "topThird">
							<p class = "topImg"></p>
							<p class = "topText3">收藏店铺</p>
						</span>
					</div>
					<div class = "bottom">
						<p class = "bottomText">
							<span class = "full">满赠</span>
							<span class = "fullDetail">满1元即赠69元优惠券，限赠一次，数量有限，赠完即止</span>
						</p>
						<p class = "bottomText">
							<span class = "full">满件折</span>
							<span class = "fullDetail">满2件8折</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class = "time">
			<p class = "timeP1">距离结束还剩</p>
			<p class = "timeP2">--8<span>天</span>8<span>时</span>8<span>分</span>8<span>秒</span>--</p>
		</div>
		<div class = "hotnav" >-- 爆款热卖 --</div>
		<div class = "imgContainer">
			<div v-for = "item in adds">
				<img :src="item.pgpicurl">
				<div>{{item.title}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"adds",
		data(){
			return{
				adds:[]
			}
		},
		created(){
			this.axios.get("../static/data/adds.json").then(res=>{
				console.log(res.data.data.hot);
				this.adds = res.data.data.hot;
			})
		}
	}
</script>
<style>
	body{
		font-family: "微软雅黑";
		background-color: #f4f4f8;
	}
	#adds header{
		height: 1.863rem;
	}
	#adds a,#adds img{
		display: block;
		height: 1.863rem;
	}
	#adds nav{
		height: 1.32rem;
		background-color: white;
		font-size:54px;
		text-align: center;
		line-height: 1.32rem;
	}
	#adds .first{
		font-family: "juanPiIco";
		font-size: 72px;
		display:inline-block;
		position: absolute;
		left:0.3rem;
	}
	#adds .third{
		font-family: "juanPiIco";
		font-size: 90px;
		display: inline-block;
		position: absolute;
		right:0.3rem;
	}
	#adds .first:before{
		content: "\e60b";
	}
	#adds .third:before{
		content: "\e60e";
	}
	#adds .detailContent{
		height: 5.25rem;
		background: url(../../static/addsImg/bg_repeat.png);
	}
	#adds .detail{
		height: 4.65rem;
		padding: 0.3rem;
	}
	#adds .detailW{
		height: 4.65rem;
		background-color: white;
	}
	#adds .top{
		height: 1.47rem;
		padding-top: 0.39rem;
	}
	#adds .topFirst{
		float: left;
		width: 1.35rem;
		height: 1.35rem;
		margin-left: 0.42rem;
		border:1px solid #ebebeb;
	}
	#adds .topFirst img{
		display: inline-block;
		height: 0.675rem;
		vertical-align: middle;
	}
	#adds .topSecond{
		float: left;
		margin-left: 0.42rem;
		height: 1.38rem;
	}
	#adds .topText1{
		font-size: 42px;
		padding-bottom: .3rem;
	}
	#adds .topText2{
		font-size: 36px;
		color:#333;
		opacity: .5;
	}
	#adds .topThird{
		display: inline-block;
		margin-left: 3rem;
		padding-top: .1rem;
	}
	#adds .topImg{
		font-family: "juanPiIco";
		font-size: 72px;
		text-align: center;
		margin-bottom: .1rem;
	}
	#adds .topImg:before{
		content: "\e612";
	}
	#adds .topText3{
		font-size: 30px;
		color:#333;	
	}
	#adds .bottom{
		height: 2.4rem;
		margin-top: .45rem;
	}
	#adds .bottomText{
		height: 0.75rem;
		padding-top: .1rem;
	}
	#adds .full{
		float: left;
		padding: 0 .2rem;
		font-size:36px; 
		color:#ff464e;
		border: 1px solid #ff464e;
		margin: 0 0.42rem;
	}
	#adds .fullDetail{
		float: left;
		font-size: 36px;
		color:#333;	
	}
	#adds .time{
		height: 1.54rem;
	}
	#adds .timeP1{
		font-size: 30px;
		color:#999;
		text-align: center;
		padding-top: .3rem;
	}
	#adds .timeP2{
		color:#333;
		font-size: 42px;
		text-align: center;
	}
	#adds .timeP2 span{
		display: inline-block;
		font-size: 24px;
		text-align: center;
		padding: 0 .1rem;
	}
	#adds .hotnav{
		height: 1.44rem;
		line-height: 1.44rem;
		background-color:white;
		font-size: 39px;
		color:#333;
		text-align: center;
	}

</style>