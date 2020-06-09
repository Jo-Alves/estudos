<template>
	<section>
		<div class="container">
			<HcodeSectionNewIndividual
				v-for="notice in news"
				:key="notice.id"
				:img-name="notice.imgName"
				:img-info="notice.imgInfo"
				:news-date="notice.date">
				
				<template #title>
					<h2>{{ notice.title}}</h2>	
				</template>
				<p>{{notice.content | truncate(200)}}</p>
				
			</HcodeSectionNewIndividual>
		</div>
	</section>
</template>

<script>
import HcodeSectionNewIndividual from "./HcodeSectionNewsIndividual"
import { mapGetters } from "vuex"
export default {
	components:{
		HcodeSectionNewIndividual
	},
	data(){
		return{
			
		}
	}, 
	computed:{
		...mapGetters({
			news: 'getNews'
		})
	}
}
</script>

<style scoped>
section{
	padding: 50px 0;
	margin-top: 25px;
	background-color: #f37520;
}
</style>
