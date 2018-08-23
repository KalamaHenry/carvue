<template>
	<main @click="hide">
		<div class="top">
			<h1>聊天</h1>
			<i class="iconfont icon-gerenxinxiicon"></i>
			<i class="iconfont icon-jiahao" @click.stop="alert"></i>
			<ul class="alert">
				<li>
					<i class="iconfont icon-erweima1"></i>
					<p>扫一扫</p>
				</li>
				<li>
					<i class="iconfont icon-erweima1"></i>
					<p>扫一扫</p>
				</li>
				<li>
					<i class="iconfont icon-erweima1"></i>
					<p>扫一扫</p>
				</li>
			</ul>
		</div>
		<router-link class="find" to="/findMsg">
			<i class="iconfont icon-search search"></i>
			<p>搜索好友、群聊、聊天记录</p>
		</router-link>

		<div class="bot">
			<img src="../../assets/images/service.jpg" width="50px" height="50px" alt="官方">
			<div class="right">
				<div>
					<p class="name">官方客服</p>
					<span>昨天</span>
				</div>
				<p class="con">HI:我是您的专属客服，您在使用...</p>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			alert(){
				$('.alert').toggle();
			},
			hide(){
				$('.alert').hide()
			}
		}
	}
</script>

<style scoped>
	main{
		background: #f2f2f2;
		min-height: 100vh;
	}
	a{
		text-decoration: none;
	}
	.top{
		padding: 13px 20px;
		display: flex;
		background: #fff;
		box-sizing: border-box;
		height: 45px;
	}
	.top h1{
		flex-grow: 1;
	}
	.top>i{
		color: #eb6841;
		font-size: 21px;
    	margin-left: 13px;
	}
	.alert{
		position: fixed;
		right: 10px;
		top: 43px;
		background: #fff;
		box-shadow: 0px 0px 2px 0px #aaa;
		display: none;
	}
	.alert li{
		display: flex;
	    padding: 10px 15px;
	    border-bottom: 1px solid #d6d6d6;
	    font-size: 12px;
	}
	.alert i{
		color: #eb6841;
	}
	.alert li p{
		align-self: center;
		margin-left: 7px;
	}
	.find{
		display: flex;
		background: #fff;
		padding: 7px;
		border-radius: 5px;
		color: #666;
		margin: 10px;
	}
	.find i{
		align-self: center;
		margin-right: 5px;
	}
	.bot{
		background: #fff;
		display: flex;
		padding: 7px;
	    border-radius: 5px;
	    margin: 10px;
	}
	.bot img{
		align-self: center;
	}
	.bot .right{
		display: flex;
		color: #999;
		flex-direction: column;
		width: 100%;
		padding: 0 10px;
		justify-content: space-between;
	}
	.bot .right div{
		display: flex;
		justify-content: space-between;
	}
</style>