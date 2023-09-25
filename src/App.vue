<script setup>
import UserTypesPie from "@/components/UserTypesPie.vue"
import NewUsers from "@/components/NewUsers.vue"

const tg_object = window.Telegram.WebApp

</script>

<template>
	<main>
	  	<UserTypesPie />
		<NewUsers />
		{{ tg_object.ready() }}
	</main>
</template>

<style scoped>

</style>
