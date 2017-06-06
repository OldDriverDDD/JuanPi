<template>
	<!-- </div> -->
	<div id="today">
	   <div class="logo">
	   	   <img src="../../../static/hyimages/top-logo.png">
	   </div>
	   <ul class="topBar">
			<li v-for="item in data ">{{ item.title }}</li>

	   </ul>
		<!-- <h2>今日上新</h2> -->
		<Dress></Dress>
	</div>

</template>

<script>

	import Dress from './dress'
	export default {
		name: "today",
		data(){
			return {
				data:[]
			}
		},
		created(){
			this.axios.get('../../../static/data/indexmenu.json').then(res=>{
				this.data = res.data.menu_list[0].subtab;
			})
		},
		components:{
			Dress
		}
	}
</script>

<style>
	#today{
		position: fixed;
		z-index: 100;
		width: 100%;
		font-size: 0.987179rem;
		background-color: #fff;
	}
	/*上面的logo部分*/
	.logo{
		width: 100%;
		height: 132px;
		border-bottom: 1px solid #dedede;
		padding-left: 108px;
		padding-right: 108px;

	}
	.logo img{
		height: 72px;
		display: block;
		padding: 0.102564rem 0;
		text-align: center;
		padding-left: 1.9rem;

	}
	#today ul{
		display: flex;
		white-space: nowrap;
	    overflow: auto;
	    overflow-y: hidden;

	}
	#today ul li{
		font-size: 42px;
		height: 114px;
		line-height: 114px;
		text-align: center;
		color: #333;
		white-space: nowrap;
		box-sizing:border-box;
		padding: 0 0.25rem;
		margin:auto;
		background-color: #fff;
		
	}
	#today ul li:hover{
		color: #ff464e;
		border-bottom: 4px solid #ff464e;
	}
</style>