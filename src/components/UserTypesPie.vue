<template>
  <div class="container">
	  <span class="titleChart">{{ chartTitle }}</span>
	  <Pie v-if="loaded" class="chart" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
	name: 'PieChart',
	components: { Pie },
	data: () => ({
		loaded: false,
		chartData: null,
		chartTitle: "Соотношение количества людей с подписками",
		chartOptions: {
			responsive: false,	// Make true
			maintainAspectRatio: false,
		}
	}),
	computed: {
		...mapGetters(['userTypes/allUsersByTypes']),
	},
	methods: {
		...mapActions(['userTypes/fetchUsersByTypes']),
	},
	async created() {
		if (!this.chartData) {
			await this['userTypes/fetchUsersByTypes']();
			this.chartData = this['userTypes/allUsersByTypes']
			this.loaded = true;
		}
	}
	/*
	async mounted() {
		try {
			this.$store.dispatch('userTypes/fetchUsersByTypes')
			this.chartData = this['userTypes/allUsersByTypes']
			console.log(this.chartData)
			this.loaded = true;
		} catch (exception) {
			this.loaded = false;
			console.error(exception)
		}
	}
	 */
}


</script>

<!--
<style scoped>
</style>
-->