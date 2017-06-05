<template>
	<div id="dress">
		<h4>nihaoi </h4>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"dress",
		data(){
			return {
				data:[]
			}
		},
		created(){
			this.axios.get('../../../static/data/wClass.json').then(res=>{
				console.log(res);
			})
		}
	}
</script>
<style type="text/css" scoped>
	
</style>