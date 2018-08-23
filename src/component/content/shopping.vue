<template>
	<main>
		<h1>商城</h1>
	    <mt-swipe  :auto="4000">
		  <mt-swipe-item>
		  	<img src="../../assets/images/banner01.jpg" alt="图片">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/banner02.jpg" alt="图片">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/banner03.jpg" alt="图片">
		  </mt-swipe-item>
		</mt-swipe>	
		<div class="item">
			<p class="title">快速维修</p>
			<ul>
				<li>
					<router-link to="/detail">
						<img src="../../assets/images/refitTools.jpg" alt="图片">
						<p>维修工具</p>
					</router-link>
				</li>
				<li class="center">
					<router-link to="/detail">
						<img src="../../assets/images/parts.jpg" alt="图片">
						<p>零件修理</p>
					</router-link>
				</li>
				<li>
					<router-link to="/detail">
						<img src="../../assets/images/test.jpg" alt="图片">
						<p>汽车改装</p>
					</router-link>
				</li>
			</ul>
		</div>

		<div class="item item2">
			<p class="title">汽车配件</p>
			<router-link to="/detail"></router-link>
			</ul>
		</div>

		<div class="item item3">
			<p class="title">商家推荐</p>
			<ul>
				<li class="left">
					<router-link to="/detail">
						<img src="../../assets/images/refitcar.jpg" alt="图片">
						<p>热销商品</p>
					</router-link>
				</li>
				<li>
					<ul>
						<li class="top">
							<router-link to="/detail">
								<p>主打商品</p>
								<img src="../../assets/images/test.jpg" alt="图片">
							</router-link>
						</li>
						<li>
							<router-link to="/detail">
								<p>限时特惠</p>
								<img src="../../assets/images/test.jpg" alt="图片">
							</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</div>

		<div class="item item4">
			<p class="title">汽车美容</p>
			<ul>
				<li>
					<router-link to="/detail">
						<img src="../../assets/images/refitcar.jpg" alt="图片">
						<p>车身美容</p>
					</router-link>
				</li>
				<li class="center">
					<router-link to="/detail">
						<p>汽车装饰</p>
						<img src="../../assets/images/refitcar.jpg" alt="图片">
					</router-link>
				</li>
			</ul>
		</div>

		<p class="footer">Powered by zhongsou.cn</p>
	</main>
</template>

<style scoped>
	main{
		background: #f2f2f2;
		padding-bottom: 45px;
	}
	a{
		text-decoration: none;
	}
	main h1{
		height: 45px;
		padding: 13px 20px;
		box-sizing: border-box;
	}
	.item{
		margin-top: 15px;
		border-top: 1px solid #d6d6d6;
		border-bottom: 1px solid #d6d6d6;
		background: #fff;
	}
	.item .center{
		border-left: 1px solid #d6d6d6;
		border-right: 1px solid #d6d6d6;
	}
	.title{
		font-size: 14px;
		border-left: 5px solid orange;
		padding: 5px;
		border-bottom: 1px solid #d6d6d6;
	}
	.item ul{
		display: flex;
	}
	.item a{
		display: flex;
		flex-direction: column;
		text-align: center;
		color: #333;
    	font-weight: bold;
    	box-sizing: border-box;
    	padding: 13px;
	}
	.item a img{
		width: 100%;
	}
	.item a p{
		padding:8px 0;
	}
	.item2 .title{
		border-left: 5px solid purple;
	}
	.item2 li{
		height: 200px;
		overflow: hidden;
	}
	.item2 a{
		display: inline-block;
	    width: 100%;
	    height: 120px;
	    background: url('../../assets/images/refitcar.jpg') 116px 17px no-repeat;
	    background-size: 40%;
	}
	.item3 .title{
		border-left: 5px solid #3fb8af;
	}
	.item3 .left{
		align-self: center;
	}
	.item3 li ul{
		flex-direction: column;
	}
	.item3 li ul a{
		flex-direction: row;
	}
	.item3 ul li{
		border-left: 1px solid #d6d6d6;
	}
	.item3 ul .top{
		border-bottom: 1px solid #d6d6d6;
	}
	.item3 li ul img{
		height: 67px;
	    width: 60%;
	    margin-left: 6px;
	}
	.item3 li ul p{
		align-self: center;
	}
	.item4 .title{
		border-left: 5px solid #3299bb;
	}
	.item4 a{
		flex-direction: row;
	}
	.item4 a p{
		align-self: center;
	}
	.item4 a img{
		height: 90px;
	    width: 60%;
	    margin-left: 6px;
	}
	.footer{
		color: #999;
		font-size: 12px;
		padding: 10px 0px;
		text-align: center
	}
</style>