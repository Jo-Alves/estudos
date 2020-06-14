<template>
  <main>    
    <Aside :hiddle-toggle="isMenuVisible" @link-event="AcionarConteudo" />
	<Content :component="content" />
  </main>
</template>

<script>
 import Aside from "./Aside";
 import Content from "./Content";
 import  { mapState } from 'vuex';
export default {
  data(){
	return{
		content: 'About'
	}
  },
  components: {
    Aside,
	Content
  },
  computed:mapState(['isMenuVisible']),
  methods:{
	AcionarConteudo(value){
		this.content = value
	}
  }
};
</script>

<style scoped>
main{
	width: 100%;
	height: 90vh;
	padding: 0;
	display: flex;
}
</style>
