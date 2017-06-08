<template>
	<div id="car">
		<div class="header">
			<i class="back" @click="back()"></i>
			<span>购物车</span>
			<span>编辑</span>
		</div>
		<ul>
			<li>
				<i class="singleChoice" @click="oneChoice()"></i>
				<img src="" alt="">
				<div class="size">
					<p>气质包臀条纹连衣裙</p>
					<p>黑色 M</p>
				</div>
				<div class="price">
					<p>￥ 79</p>
					<p>单独购买￥89</p>
				</div>
				<div class="goodsNumber">
					<i class="reduce">-</i>
					<span>1</span>
					<i class="add">+</i>
				</div>
			</li>
			<li>
				<i class="singleChoice" @click="oneChoice()"></i>
				<img src="" alt="">
				<div class="size">
					<p>韩版紧身显瘦高腰短裤</p>
					<p>靛青色 M(中码)</p>
				</div>
				<div class="price">
					<p>￥ 28</p>
					<p>单独购买￥38</p>
				</div>
				<div class="goodsNumber">
					<i class="reduce">-</i>
					<span>1</span>
					<i class="add">+</i>
				</div>
			</li>
		</ul>
		<div class="footer">
			<div class="allChoice">
				<i class="circle"></i>
				<span>全选</span>
			</div>
			<div class="allprice">
				<p>合计:￥<span>0:00</span></p>
				<p>总额:￥<span>0:00</span> 立减:￥<span>0:00</span></p>
			</div>
			<router-link to="/car/pay" tag="div">
				去结算(<span>0</span>)
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "car",
		methods: {
			back() {
				history.back();
			},
			oneChoice() {
				console.log(11111);
			}
		}
	}
</script>

<style scoped>
	.header {
		width: 100%;
		height: 1.32rem;
		background-color: #fff;
		border-bottom: 1px solid #f4f4f8;
		overflow: hidden;
		line-height: 1.32rem;
		position: relative;
	}
	.header .back {
		font-family: "juanPiIco";
		font-size: 0.72rem;
		font-style: normal;
		margin-left: 0.3rem;
		position: absolute;
	}
	.header .back:before {
		content: "\e60b";
	}
	.header span:first-of-type {
		font-size: 0.54rem;
		position: absolute;
		left: 44%;
	}
	.header span:nth-of-type(2) {
		font-size: 0.45rem;
		float: right;
		margin-right: 0.42rem;
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 146px;
		background-color: #fff;
		z-index: 99;
		overflow: hidden;
	}
	.footer > div {
		float: left;
	}
	.footer .allChoice {
		width: 3.1rem;
		/*text-align: right;*/
		height: 1.46rem;
		line-height: 1.02rem;
		position: relative;
	}
	.circle {
		font-family: "juanPiIco";
		font-size: 0.6rem;
		font-style: normal;
		color: #9b9b9b;
		position: absolute;
		left: 25%;
    	top: 20%;
	}
	.circle:before {
		content: "\e622";
	}
	.footer .allChoice span {
		font-size: 0.48rem;
		color: #333;
		position: absolute;
		top: 18%;
    	left: 50%;
	}
	.footer .allprice {
		width: 5.42rem;
		height: 1.46rem;
		color: #666;
		text-align: right;
		padding-right: 0.17rem;
		margin-top: 0.16rem;
	}
	.footer .allprice p:first-of-type {
		font-size: 0.42rem;
	}
	.footer .allprice p:first-of-type span {
		color: #ff464e;
	}
	.footer .allprice p:last-of-type {
		font-size: 0.3rem;
		color: #999;
	}
	.footer > div:last-of-type {
		width: 3.72rem;
		background-color: #ff464e;
		color: #fff;
		font-size: 0.54rem;
		height: 1.46rem;
		text-align: center;
		line-height: 1.46rem;
	}
	ul li {
		width: 100%;
		height: 2.94rem;
		background-color: #fff;
		border-bottom: 2px solid #f4f4f8;
		overflow: hidden;
		position: relative;
	}
	ul li .singleChoice {
		font-family: "juanPiIco";
		font-size: 0.6rem;
		font-style: normal;
		color: #9b9b9b;
		position: absolute;
	    left: 3%;
	    top: 39%;
	}
	ul li .singleChoice:before {
		content: "\e622";
	}
	ul li img {
		float: left;
		width: 2.1rem;
		height: 2.1rem;
		margin-left: 150px;
		position: absolute;
    	top: 15%;
	}
	ul li .size {
		position: absolute;
	    left: 32%;
	    top: 15%;
	}
	ul li .size p:first-of-type {
		color: #666;
		margin-bottom: 0.15rem;
	}
	ul li .price {
	 	position: absolute;
	    right: 3%;
	    top: 15%;
	    text-align: right;
	}
	ul li .price p:nth-of-type(2) {
		text-decoration: line-through;
		margin-top: 0.15rem;
	}
	ul li > div p:first-of-type {
		font-size: 0.42rem;
	}
	ul li > div p:nth-of-type(2) {
		font-size: 0.36rem;
		color: #bbb;
	}
	ul li .goodsNumber {
		width: 2.51rem;
		height: 0.69rem;
		position: absolute;
		left: 32%;
    	top: 47%;
	}
	li .goodsNumber .reduce, li .goodsNumber .add {
		display: inline-block;
		width: 0.69rem;
		height: 0.69rem;
		background-color: #f4f4f8;
		color: #ccc;
		line-height: 0.69rem;
		font-style: normal;
		text-align: center;
		font-size: 0.42rem;
	}
	li .goodsNumber .add {
		color: #ff464e;
	}
	li .goodsNumber span {
		font-size: 0.42rem;
		color: #333;
	}
</style>