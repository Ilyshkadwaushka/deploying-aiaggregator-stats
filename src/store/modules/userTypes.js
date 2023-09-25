import axios from "axios"

export default {
    namespaced: true,
    actions: {
        async fetchUsersByTypes(ctx) {
            //let res = await axios.get('http://127.0.0.1:8000').catch(
            //    err => console.log(err))
            //const datasets = res.data
            const datasets = {
                labels: ['Без подписки', '1 неделя', '3 месяца', '1 год'],
                datasets: [
                    {
                        backgroundColor: ['#F3DE8A', '#272838', '#EB9486', '#7E7F9A'], 'data': [300, 450, 400, 100]
                    }
                ]
            }
            ctx.commit('updateUsersByTypes', datasets)
        }
    },
    mutations: {
        updateUsersByTypes(state, datasets) {
            state.datasets = datasets
        }
    },
    state: {
        datasets: {}
    },
    getters: {
        allUsersByTypes(state) {
            return state.datasets
        }
    }
}