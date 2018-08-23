<template>
 	<main>
 		<router-view></router-view>
 		<v-tab></v-tab>
 	</main>
</template>

<script>
	import tab from './component/nav/tab.vue'
	export default {
	  components:{
	  	'v-tab':tab
	  }
	}
</script>

