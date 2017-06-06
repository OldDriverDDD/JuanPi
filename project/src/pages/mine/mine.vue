<template>
	<div id="mine">
		<div class="header">
			<div>
				<span></span>
				<span>个人中心</span>
			</div>
			<div>
				<a href="">注册</a>
				<a href="">登录</a>
			</div>
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
		
	}
	.header > div:first-of-type > span:nth-of-type(2) {
		display: inline-block;
		font-size: 0.54rem;
		color: #fff;
	}
	.header a {
		display: inline-block;
		width: 4.08rem;
		height: 2.34rem;
		color: #fff;
		font-size: 0.6rem;
	}
	/*[data-dpr="3"] #mine .header {
	    height: 432px;
	    overflow: hidden;
	}*/
</style>