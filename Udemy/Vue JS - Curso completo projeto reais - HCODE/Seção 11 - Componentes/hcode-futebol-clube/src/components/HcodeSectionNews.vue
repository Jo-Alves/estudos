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
export default {
	components:{
		HcodeSectionNewIndividual
	},
	data(){
		return{
			news: []
		}
	},
	created(){
		this.news = [{
			id: 1,
			title: "Começam os treinos para a nova temporada",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			date: "2020-05-03",
			imgName: "news1.jpg",
			imgInfo: "Notícia 1"
		},
		{
			id: 2,
			title: "Jogo de quarta termina empatado",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			date: "2020-05-07",
			imgName: "news2.jpg",
			imgInfo: "Notícia 2"
		},
		{
			id: 3,
			title: "A inauguração do estádio será ano que vem",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			date: "2020-05-10",
			imgName: "news3.jpg",
			imgInfo: "Notícia 3"
		}]
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
