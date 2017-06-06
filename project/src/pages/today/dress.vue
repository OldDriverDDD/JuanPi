<template>
	<div id="dress">
		<div class="kindClass">
			<div>
				<div class="kind" v-for="item in data">
					<img :src="item.pic"/>
				</div>
			</div>
		</div>
		<div class="kindClass">
			<div>
				<div class="kind" v-for="item in data1">
					<img :src="item.pic"/>
				</div>
			</div>
		</div>
		<div class="line"></div>
		<div></div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"dress",
		data(){
			return {
				data:[],
				data1:[],
				data2:[],
				data3:[]

			}
		},
		created(){
			this.axios.get('../../../static/data/wClass.json').then(res=>{

				this.data = res.data.module_ads.multi_block[0].data[0].child;
				console.log(res.data.module_ads.multi_block);
				this.data1 = res.data.module_ads.multi_block[1].data[0].child;
				this.data2 = res.data.module_ads.multi_block[2].data[0].child;
				this.data3 = res.data.module_ads.multi_block[3].data[0].child;

			})
		}
	}
</script>
<style type="text/css" scoped>
	/*女装分类菜单*/
	.kindClass{
		width: 100%;

	}
	.kindClass div{
		width: 100%;
		height: 329.13px;
		display: flex;
	}
	.kind{
		width: 100%;
		height: 100%;

	}
	.kind img{
		height:100%; 
		position: relative;
		box-sizing:border-box;
	} 
	/*线*/
	.line{
		width: 100%;
		height: 0.15rem;
		background-color: #f4f4f8;
	}
	/*搭配 热销 一周流行*/

</style>