<template>
	<main @click="hide">
		<div class="top">
			<i class="iconfont icon-zuojiantou" @click="back"></i>
			<h1>注册账号</h1>
		</div>	
		<div class="wrap">
			<div class="item">
				<span>+86</span>
				<input type="text" placeholder="请输入手机号码">
			</div>		
			<div class="tonext" @click.stop="judge">下一步</div>
		</div>	
		<div class="bot">
			<i class="iconfont icon-dagou"></i>
			<p>我阅读并同意遵守应用<router-link to="/rule">"服务条款"</router-link>和隐私政策</p>
		</div>
		<div class="tips">请输入正确的手机号</div>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			},
			judge(){
				if($('input').val()==''){
					$('.tips').css('bottom','18px')
				}else{
					var reg=/^[1][3,4,5,7,8][0-9]{9}$/;
					if(!reg.test($('input').val())){
						$('.tips').css('bottom','18px')
					}else{
						console.log('yes')
						$('.tips').css('bottom','-48px')
					}
				}
			},
			hide(){
				$('.tips').css('bottom','-48px')
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
	.wrap{
		margin: 15px;
	    background: #fafafa;
	    padding: 10px;
	    border-radius: 5px;
	}
	.item{
	    box-sizing: border-box;
	    display: flex;
	    border: 1px solid #d6d6d6;
	}
	.item span{
		padding: 12px;
	    background: #fff;
		border-right: 1px solid #d6d6d6;
	    color: #555;
	}
	.item input{
		height: 50px;
		flex-grow: 1;
		outline: none;
		border: none;
		padding: 0px 10px;
		box-sizing: border-box;
	}	
	.tonext{
		padding: 10px;
		background: #3299bb;
		color: #fff;
		text-align: center;
		border-radius: 5px;
		margin-top: 20px;
	}
	.bot{
		display: flex;
		margin: 15px;
	}
	.bot p{
		flex-grow: 1;
	}
	.bot i{
		color: #fff;
	    background: #3299bb;
	    border-radius: 50%;
	    width: 17px;
	    height: 17px;
	    text-align: center;
	    font-size: 17px;
	    align-self: center;
	    margin-right: 8px;
	}
	.tips{
		color: #333;
	    background: #fafafa;
	    display: inline-block;
	    padding: 10px;
	    border-radius: 9px;
	    position: fixed;
	    bottom: -48px;
	    left: 31%;
	    transition: all 1s;
	}
	a{
		color: #3299bb;
	}
</style>