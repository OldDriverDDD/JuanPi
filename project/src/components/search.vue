<template>
	<div id="search">
		<div class="back">
			<span @click="back"></span>
			<p></p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'search',
		data(){
			return {

			}
		},
		methods: {
			back(){
				history.back()
			}
		}
	}
</script>

<style type="text/css">
	/*#app .tabbar{
		display: none;
	}*/
	#search{
		background-color: #fff;
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1000;
	}
	.back{
		width: 100%;
		height: 1.32rem;
		line-height: 1.32rem;
		width: 100%;
	    position: relative;
	    z-index: 199;
	    border-bottom: 1px solid #dedede;
	}
	.back span{
		font-family: "juanPiIco";
		font-size: 72px;
		margin-left: 0.36rem;
	}
	.back span:before{
		content: "\e60b";
	}
</style>