<template>
	<main>
		<div class="top">
			<i class="iconfont icon-zuojiantou" @click="back"></i>
			<h1>用户协议</h1>
		</div>
		<div class="con">
			合作的经营管理模式：双方约定共同管理和经营 汽车的汽车维修售后服务项目。原则上甲方委派财务部经理和维修服务部副经理，乙方委派财务部副经理和维修服务部经理。双方在本协议生效 个月内拟订经营管理制度和财务管理制度，共同确认后作为本协议的补充协议，并享有同等法律效力......
		</div>	
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
	.con{
		margin: 15px;
	    line-height: 29px;
	    color: #333;
	}	
</style>