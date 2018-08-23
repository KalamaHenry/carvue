<template>
	<main>
		<router-link to="/login" class="login">
			<img src="../../assets/images/my.jpg" alt="图片" width="100px" height="100px" class="title">
			<p class="myname">立即登录</p>
		</router-link>
		<div class="item">
			<router-link to="/permsg">
				<ul class="left">
					<li><i class="iconfont icon-gerenxinxi"></i></li>
					<li>个人信息</li>
				</ul>
				<ul class="right">
					<li><i class="iconfont icon-erweima"></i></li>
					<li><i class="iconfont icon-youjiantou"></i></li>
				</ul>
			</router-link>
		</div>
		<div class="item item2">
			<router-link to="/permsg">
				<ul class="left">
					<li><i class="iconfont icon-gerenxinxiicon"></i></li>
					<li>我的首页</li>
				</ul>
				<ul class="right">
					<li>向小伙伴展示风采</i></li>
					<li><i class="iconfont icon-youjiantou"></i></li>
				</ul>
			</router-link>
		</div>
		<div class="item item3">
			<router-link to="/permsg">
				<ul class="left">
					<li><i class="iconfont icon-anquanzhongxin"></i></li>
					<li>安全中心</li>
				</ul>
				<ul class="right">
					<li><i class="iconfont icon-youjiantou"></i></li>
				</ul>
			</router-link>
		</div>
		<div class="item item3">
			<router-link to="/permsg">
				<ul class="left">
					<li><i class="iconfont icon-shezhi"></i></li>
					<li>设置</li>
				</ul>
				<ul class="right">
					<li><i class="iconfont icon-youjiantou"></i></li>
				</ul>
			</router-link>
		</div>
		
	</main>
</template>

<style scoped>
	main{
		background: #f2f2f2;
		min-height: 100vh;
	}
	a{
		text-decoration: none;
	}
	.login{
		height: 155px;
	    background: url('../../assets/images/bg.jpg') -93px -28px no-repeat;
	    display: flex;
	    align-items: center;
	    flex-direction: column;
	    color: #968e8e;
	    padding-top: 62px;
	}
	.login p{
		margin-top: 5px;
	}
	.title{
		border-radius: 50%;
	}
	.item {
		background: #fff;
	}
	.item a{
		display: flex;
		justify-content: space-between;
		padding: 20px 15px;
		border-bottom: 1px solid #d6d6d6;
		font-size: 20px;
    	color: #666;
	}
	.item a ul{
		display: flex;
		flex-direction: row;
	}
	.item .left{
		color: #000;
	}
	.item .left i{
		font-size: 29px;
    	color: #eb6841;
    	margin-right: 5px;
	}
	.item .right i{
		margin-right: 5px;

	}
	.item2 .right li{
		font-size: 12px;
    	align-self: center;
	}
	.item3{
		margin-top: 12px;
	}
</style>