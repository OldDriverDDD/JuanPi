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

<style>
	.header {
		width: 100%;
		height: 432px;
		background: #ff464e;
		overflow: hidden;
	}
	.header a {
		font-size: 0.179487rem;
	}
	/*[data-dpr="3"] #mine .header {
	    height: 432px;
	    overflow: hidden;
	}*/
</style>