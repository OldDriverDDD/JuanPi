<template>
	<div id="today">
		
		<!-- logo -->
		<div class="logo">
	   	   <img src="../../../static/hyimages/top-logo.png" class="logoImg">
	   </div>
	   <div class="topBar">
			<router-link to = "/today/new" class="topbarli">上新</router-link>
			<router-link to = "/today/dress" class="topbarli">女装</router-link>
			<router-link to = "/today/shoesBag" class="topbarli">鞋包</router-link>
			<router-link to = "/today/mother" class="topbarli">母婴</router-link>
			<router-link to = "/today/shuma" class="topbarli">数码</router-link>
			<router-link to = "/today/house" class="topbarli">居家</router-link>
			<router-link to = "/today/man" class="topbarli">男士</router-link>
			<router-link to = "/today/beautys" class="topbarli">美妆</router-link>
			<router-link to = "/today/cate" class="topbarli">美食</router-link>
		</div>
	   <router-view></router-view>

	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped >
	/*上面的logo部分*/
	.logo{
		width: 100%;
		height: 1rem;
		padding-left: 1.08rem;
		padding-right: 1.08rem;
		padding-top:0.3rem;
		background-color: #fff; 
	}
	.logoImg{
		height: 0.72rem;
		display: block;
		padding: 0.102564rem 0;
		text-align: center;
		padding-left: 3.9rem;

	}
	.topBar{
		display: flex;
		white-space: nowrap;
	    overflow: auto;
	    overflow-y: hidden;

	}
	.topbarli{
		font-size: 0.42rem;
		height: 1.14rem;
		line-height: 1.14rem;
		text-align: center;
		color: #333;
		white-space: nowrap;
		box-sizing:border-box;
		padding: 0 0.57rem;
		margin:auto;
		background-color: #fff;
		
	}
	#today .topbarli:hover{
		color: #ff464e;
		border-bottom: 0.04rem solid #ff464e;
	}


	



	


</style>