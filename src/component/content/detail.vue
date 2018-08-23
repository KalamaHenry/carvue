<template>
	<main>
		<div class="top">
			<i class="iconfont icon-zuojiantou" @click="back"></i>
		</div>
		<div class="wrap">
			<h1 class="title">车辆保养最易忽略哪些部分</h1>
			<ul>
				<li>华龙网</li>
				<li>昨天</li>
				<li>阅读数<span>39</span></li>
			</ul>
			<div class="con">
				与众不同，只为彰显魅力个性，长轴距C级车充满未来感的内饰设计风格，将简约明快与精致尊贵发挥得淋漓尽致。考究细节彰显匠心品质，智能操控触动非凡之旅！后排座垫优化，安享惬意,2920mm加长轴距结合后排坐垫优化，令后排空间更显伸展舒适，为乘客带来更加伸展的感觉，营造出自然舒畅的乘坐体验，让旅途充满惬意与轻松。
			</div>
		</div>
		<div class="bot">
			<div class="flex">
				<input type="text" placeholder="写评论...">
				<router-link to="/comment"><i class="iconfont icon-xinxi"></i></router-link>
				<i class="iconfont icon-dianzan"></i>
				<i class="iconfont icon-star"></i>
				<i class="iconfont icon-share" @click="flag=true"></i>
			</div>
		</div>
		<mt-popup
		  v-model="flag"
		  position="bottom">
			<div class="popwrap">
				<h1>分享</h1>
				<ul>
					<li>
						<router-link to="/weibo">
							<i class="iconfont icon-weibo"></i>
							<span>新浪微博</span>
						</router-link>
					</li>
					<li>
						<router-link to="/weibo" class="weixin">
							<i class="iconfont icon-weixin"></i>
							<span>微信好友</span>
						</router-link>
					</li>
					<li>
						<router-link to="/weibo" class="circle">
							<i class="iconfont icon-pengyouquan"></i>
							<span>朋友圈</span>
						</router-link>
					</li>
					<li>
						<router-link to="/weibo" class="qq">
							<i class="iconfont icon-qq"></i>
							<span>QQ</span>
						</router-link>
					</li>
					<li>
						<router-link to="/weibo" class="zone">
							<i class="iconfont icon-qqkongjian"></i>
							<span>QQ空间</span>
						</router-link>
					</li>
				</ul>
			</div>
		</mt-popup>
	</main>
</template>

<script>
	export default{
		data(){
			return {
				flag:false
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	main{
		min-height: 100vh;
	    position: relative;
	    z-index: 5;
	    background: #f2f2f2;
	}
	.top{
    	height: 45px;
	    box-sizing: border-box;
	    padding: 13px 20px;
	    background: #fff;
	}
	.top i{
		color: #eb6841;
    	font-size: 25px;
	}
	.wrap{
		padding: 15px;
	}
	.wrap .title{
		font-size: 21px;
		font-weight: bold;
	}
	.wrap ul{
		display: flex;
		margin: 10px 0 15px;
	}
	.wrap ul li{
		margin-right: 10px;
		color: #999;
	}
	.con{
		font-size: 17px;
    	line-height: 30px;
	}
	.bot{
		width: 100%;
		padding: 15px;
		background: #fff;
		position: fixed;
		bottom: 0;
	}
	.bot .flex{
		display: flex;
	}
	.bot input{
		width: 45%;
	    background: #f2f2f2;
	    border: 1px solid #d6d6d6;
	    border-radius: 30px;
	    height: 36px;
	    padding-left: 6px;
	    margin-right: 15px;
	    outline: none;
	}
	a{
		text-decoration: none;
		align-self: center;
	}
	.bot i{
		color: #aaa;
	    font-size: 25px;
	    margin: 0 5px;
	    align-self: center;
	}
	.mint-popup{
	    width: 100%;
	    padding: 20px 45px;
	    box-sizing: border-box;
	    text-align: center;
	}
	.mint-popup h1{
		font-size: 20px;
	}
	.popwrap ul{
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
	}
	.popwrap ul li{
		width: 25%;
		margin-bottom: 12px;
	}
	.popwrap a{
		color: #666;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		font-size: 15px;
	}
	.popwrap i{
		width: 35px;
	    height: 35px;
	    line-height: 35px;
	    background: #e83138;
	    color: #fff;
	    border-radius: 50%;
	    font-size: 27px;
	    align-self: center;
	    margin-bottom: 5px;
	}
	.popwrap .weixin i{
		background: #2aa146;
	}
	.popwrap .circle i{
		background: #2aa146;
	}
	.popwrap .qq i{
		background: #3b86e0;
	}
	.popwrap .zone i{
		background: #f7b50c;
	}
</style>