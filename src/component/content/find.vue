<template>
	<main>
		<h1>发现</h1>
		<router-link to="/erweima">
			<i class="iconfont icon-erweima1"></i>
			<p>扫一扫</p>
		</router-link>
	</main>
</template>

<style scoped>
	main{
		background: #f2f2f2;
		min-height: 100vh;
	}
	h1{
		padding: 13px 20px;
		background: #fff;
		border-bottom: 1px solid #d6d6d6;
		box-sizing: border-box;
		height: 45px;
	}
	a{
		text-decoration: none;
		display: flex;
		padding: 13px 20px;
		background: #fff;
	}
	i{
		background: #d6d6d6;
	    font-size: 22px;
	    margin-right: 5px;
	    width: 31px;
	    height: 31px;
	    line-height: 31px;
	    text-align: center;
	    border-radius: 50%;
	    color: #fff;
	}
	a p{
		align-self: center;
		color: #000;
	}
</style>