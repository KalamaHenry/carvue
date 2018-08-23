<template>
	<main>
	  <div class="page-search">
	    <mt-search 
	    	autofocus 
	    	v-model="value" 
	    	:result="filterResult">
	    </mt-search>
	  </div>
	</main>
</template>

<script>
export default {
  name: 'page-search',
  data() {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]

    };
  },
  mounted(){
    $('.mint-searchbar-cancel').click(()=>{
      this.$router.go(-1)
    })
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  }
};
</script>

<style lang="css" scoped>
main{
	position: relative;
	height: 100vh;
	background: #fff;
	z-index: 5;
}
.mint-searchbar-inner .mintui-search{
	font-size: 23px;
}
</style>