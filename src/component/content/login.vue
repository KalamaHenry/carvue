<template>
	<main>
		<div class="top">
			<i class="iconfont icon-zuojiantou" @click="back"></i>
			<h1>登录</h1>
		</div>
		<form>
			<div class="item">
				<i class="iconfont icon-yonghuming"></i>
				<input type="text" placeholder="账号/手机号">
			</div>
			<div class="item">
				<i class="iconfont icon-mima"></i>
				<input type="text" placeholder="请输入密码">
				<router-link to="/forget">忘记密码？</router-link>
			</div>
			<div class="handle">
				<router-link to="/showRegis">注册</router-link>
				<input type="submit" value="登录" />
			</div>
		</form>
		<router-link class="bot" to="/msgLogin">
			<i class="iconfont icon-shouji"></i>
			<p>短信登录</p>
		</router-link>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	main{
		background: #f2f2f2;
		height: 100vh;
		position: relative;
		z-index: 5;
	}
	a{
		text-decoration: none;
	}
	.top {
		display: flex;
		padding: 13px 20px;
		height: 45px;
		background: #fff;
		font-size: 20px;
		box-sizing: border-box;
	}
	.top h1{
		flex-grow: 1;
		text-align: center;
	}
	.top *{
		align-self: center;
	}
	.top i{
		color:#eb6841;
		font-size: 25px;
	}
	.item,.handle,.bot{
		width: 97%;
		margin: 0 auto;
		padding: 20px 15px 0px;
		box-sizing: border-box;
		position: relative;
	}
	.item i{
		position: absolute;
	    z-index: 5;
	    left: 22px;
	    top: 34px;
	    font-size: 20px;
	}
	.item input{
		height: 50px;
		width: 100%;
		outline: none;
		border: 1px solid #d6d6d6;
		padding: 0px 35px;
		border-radius: 8px;
		box-sizing: border-box;
	}
	.item a{
		position: absolute;
		right: 22px;
		top: 34px;
		color: #ababab;
	}
	.handle{
		display: flex;
	}
	.handle a{
		padding: 10px 50px;
	    background: #fff;
	    border-radius: 5px;
	    color: #333;
	    font-size: 20px;
	}
	.handle input{
		flex-grow: 1;
		padding: 10px;
	    font-size: 20px;
		border-radius: 5px;
		background: #3299bb;
		color: #fff;
		border: none;
	}
	.bot{
		display: flex;
		justify-content: flex-end;
		font-size: 20px;
		color: #3299bb;
	}
	.bot i{
		font-size: 25px;
    	margin-right: 5px;
	}
</style>