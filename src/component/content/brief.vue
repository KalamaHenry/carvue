<template>
	<main>
		<ul>
			<li v-for="v in brief" class="wrap">
				<router-link to="/detail">
					<div :class="v.src?len:''">
						<h1>{{v.title}}</h1>
						<span class="left">{{v.source}}</span>
						<span class="right">{{v.time}}</span>
					</div>
					<img v-lazy="v.src" alt="图片" v-show="v.src">
				</router-link>
			</li>
		</ul>
		<i class="iconfont icon-huidaodingbu back" @click="back"></i>
	</main>
</template>

<script>
	export default{
		name:'brief',
		data(){
			return{
				brief:[],
				len:'len',
				scr:0
			}
		},
		methods:{
		   back(){
		   		$('html,body').scrollTop(0)
		   }
		},
	    mounted() {
	    	$(window).scroll(function(){
	    		this.scr=$(this).scrollTop()
	    		if(this.scr>600){
	    			$('.back').show()
	    		}else{
	    			$('.back').hide()
	    		}
	    	})
	        this.$axios.get("static/data/home.json").then((res)=>{
	          this.brief = res.data.brief[0].msg;
	        });
	    }

	}

</script>

<style scoped>
	.len{
		width: 90%; 
	}
	a{
		text-decoration: none;
		color: #666;
	}
	li h1{
    	display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	li span{
		margin-right: 10px;
	}
 	.wrap a{
 		display: flex;
		border-top: 1px solid #d6d6d6;
		padding: 10px 20px;
		box-sizing: border-box;
	}
	.wrap h1{
		margin-bottom: 40px;
		line-height: 23px;
	} 
	img{
		width: 87px;
	    height: 88px;
	    align-self: center;
	    margin-left: 5px;
	}
	i{
		color: #333;
	    font-size: 30px;
	    position: fixed;
	    bottom: 70px;
	    right: 25px;
	    display: none;
	}
</style>