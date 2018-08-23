<template id="start">
	<transition enter-active-class="animated flipInY">
		<main>
			<h1 class="animated bounceInDown">这是开始的页面</h1>
			<router-link to='/home'>进入应用</router-link>
		</main>
	</transition>
</template>

<style scoped>
	main{
		position: relative;
	    height: 100vh;
	    background: #fff;
	    z-index: 5;
	}
</style>