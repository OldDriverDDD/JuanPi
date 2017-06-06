<template>
	<div id="today">
		
		<!-- logo -->
		<div class="logo">
	   	   <img src="../../../static/hyimages/top-logo.png" class="logoImg">
<<<<<<< HEAD
	   	   <span class="search"></span>
=======

>>>>>>> 0c7be5856cbaf9ac2e45b3403d037db432ba9b1d
	   </div>
	   <div class="topBar" ref  ="topbar" :class = "{'scrollbar':flag}">
			<router-link to = "/today/new" class="topbarli" >上新</router-link>
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
<<<<<<< HEAD
	
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
	    },
	   
	}
=======

import Dress from "./dress"
	export default{
		data(){
			return {
				topBanner:"",
				navBar:[],
				adsList:[],
				gtopList:[],
				data:[]
			}
		},
		created(){
			this.axios.get('../../../static/data/indexmenu.json').then(res=>{
				this.data = res.data.menu_list[0].subtab;
			})

			this.axios.get('../../static/data/lunbo.json').then(res=>{
				console.log(res.data.module_ads.multi_block[2].data[0].child);
				this.topBanner = res.data.topbanner.pic_url;
				this.navBar = res.data.module_ads.multi_block[0].data[0].child;
				this.adsList =  res.data.module_ads.multi_block[1].data[0].child;
				this.gtopList =  res.data.module_ads.multi_block[2].data[0].child[0];
			})
		},
		components:{
			Dress
		}
}

>>>>>>> 0c7be5856cbaf9ac2e45b3403d037db432ba9b1d
</script>

<style scoped >
	/*上面的logo部分*/
	.logo{
		width: 100%;
		height: 1rem;
<<<<<<< HEAD

=======
>>>>>>> 0c7be5856cbaf9ac2e45b3403d037db432ba9b1d
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