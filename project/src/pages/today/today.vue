<template>
	<div id="today">
		
		<!-- logo -->
		<div class="logo">
	   	   <img src="../../../static/hyimages/top-logo.png" class="logoImg">
			

<<<<<<< HEAD
	   	   <span class="search"></span>
=======
	   	   <router-link to="/search" class="search"></router-link>

		

>>>>>>> 6d1ce6b27ff44e4cab95d8dd8f31e6b79f8f93b8
	   </div>
	   <div class="topBar" ref  ="topbar" :class = "{'scrollbar':flag}">
			<router-link to = "/today/new" class="topbarli nn">上新</router-link>
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
	   <!-- <new></new> -->

	</div>
</template>

<<<<<<< HEAD

<script>
	// import New from "./new"
=======
<<<<<<< HEAD
<script>

	//import New from "./new"

=======
<script>	
>>>>>>> 6d1ce6b27ff44e4cab95d8dd8f31e6b79f8f93b8
>>>>>>> b47f6175405f01a59e8091b475271c5169c0f559
	export default{
		data() {
			return {
				scroll:'',
				flag:null
			}
		},
		methods: {
	      scrollBar() {
	        this.scroll = document.body.scrollTop;
	        if(this.scroll>0){
	        	this.flag = true;
	        }else{
	        	this.flag = false;
	        }

	      },

	    },
		mounted() {
	      window.addEventListener('scroll', this.scrollBar)
<<<<<<< HEAD
	    },
	    components:{
	    	// New
	    }
=======
	    }
	    // components:{
	    // 	New
	    // }
>>>>>>> b47f6175405f01a59e8091b475271c5169c0f559
	   
	}

</script>

<style scoped >
	/*上面的logo部分*/
	.logo{
		width: 100%;
		height: 1rem;
		padding-top:0.3rem;
		background-color: #fff; 
	}
	.logoImg{
		height: 0.72rem;
		display:inline-block;
		padding: 0.102564rem 0;
		text-align: center;
		padding-left: 3.9rem;
		vertical-align: top;

	}
	.topBar{
		display: flex;
		white-space: nowrap;
	    overflow: auto;
	    overflow-y: hidden;
	    position: fixed;
		z-index: 2;
	}
	.topbarli{
		font-size: 0.47rem;
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
	.nn{
		color: #ff464e;
		border-bottom: 0.04rem solid #ff464e;
	}
	#today .topbarli:hover{
		color: #ff464e;
		border-bottom: 0.04rem solid #ff464e;
	}
	.search{
		font-family: "juanPiIco";
		font-size: 0.7rem;
		position: absolute;
		right: 0.1rem;
	}
	.search:before{
		content: "\e61c";
	}
	.scrollbar{
		position: fixed;
		top: 0;

	}
	.router-link-active{
		color: #ff464e;
		border-bottom: 0.04rem solid #ff464e;
	}



	


</style>