<template>
	<div class="container">
		<span class="titleChart">{{ chartTitle }}</span>
		<Bar v-if="loaded" class="chart" :width="300" :height="300" :options="options" :data="chartData"/>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar, Pie} from "vue-chartjs";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
	name: 'BarChart',
	components: { Bar },
	data: () => ({
		chartTitle: "Количество новых пользователей",
		loaded: false,
		options: {
			responsive: false,
			maintainAspectRatio: false,
		},
		chartData: null,
	}),
	computed: {
		...mapGetters(['users/allUsers']),
	},
	methods: {
		...mapActions(['users/fetchAllUsers']),
	},
	async created() {
		if (!this.chartData) {
			await this['users/fetchAllUsers']();
			this.chartData = this['users/allUsers']
			this.loaded = true;
		}
	}
}


</script>

<!--
<style scoped>
</style>
-->