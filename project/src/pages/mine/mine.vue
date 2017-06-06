<template>
	<div id="mine">
		<div class="header">
			<div>
				<span><</span>
				<span>个人中心</span>
			</div>
			<div>
				<a href="">注册</a>
				<i class="line"></i>
				<a href="">登录</a>
			</div>
		</div>
		<div class="order"></div>
		<div class="afterSale"></div>
		<div class="mines">
			<p>我的收藏</p>
			<p>我的优惠券</p>
			<p>我的拼团</p>
		</div>
		<div class="serviceCenter">
			<p>客服中心</p>
			<p>关于卷皮</p>
		</div>
		<div class="footer-nav">
			<a href="">返回首页</a>
			<a href="">客户端</a>
			<a href="">电脑版</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "mine"
	}
</script>

<style scoped>
	.header {
		width: 100%;
		height: 4.32rem;
		background-color: #ff464e;
		overflow: hidden;
		background-image: linear-gradient(146deg,#ff464e 34%,#fc7400);
	}
	.header > div:first-of-type {
		height: 1.32rem;
		text-align: center;
	}
	.header > div:nth-of-type(2) {
		height: 2.34rem;
	}
	.header > div:first-of-type > span:first-of-type {
		float: left;
		margin-top: 0.26rem;
    	margin-left: 0.47rem;
		display: inline-block;
		width: 0.72rem;
		height: 0.72rem;
		color: #fff;
		font-size: 72px;
		font-weight: 0;
		transform: scaleY(1.5);
		/*background: url('../../../static/mineImg/back.png') no-repeat center;*/
	}
	.header > div:first-of-type > span:nth-of-type(2) {
		display: inline-block;
		font-size: 0.54rem;
		color: #fff;
		margin-right: 1.2rem;
	}
	.header > div:nth-of-type(2) {
		text-align: center;
		position: relative;
		line-height: 2rem;
	}
	.header a {
		display: inline-block;
		width: 4.08rem;
		height: 2.34rem;
		color: #fff;
		font-size: 0.6rem;
	}
	.header .line {
		height: 0.6rem;
		width: 2px;
		background-color: #fff;
		display: inline-block;
		position: absolute;
		top: 38%;
		left: 50%;
	}
	/*[data-dpr="3"] #mine .header {
	    height: 432px;
	    overflow: hidden;
	}*/
	.order {
		width: 100%;
		height: 1.44rem;
		background-color: #fff;
		border-bottom: 1px solid #f4f4f8;
	}
	.afterSale {
		width: 100%;
		height: 2.39rem;
		background-color: #fff;
		margin-bottom: 0.32rem;
	}
	.mines p, .serviceCenter p {
		width: 100%;
		height: 1.44rem;
		background-color: #fff;
		border-bottom: 1px solid #f4f4f8;
		font-size: 0.45rem;
		color: #333;
		line-height: 1.44rem;
		text-indent: 0.57rem;
	}
	.mines {
		margin-bottom: 0.32rem;
	}
	.footer-nav {
		width: 100%;
		height: 1.38rem;
		background-color: #fff;
	}
	.footer-nav a {
		font-size: .2rem;
	}
</style>