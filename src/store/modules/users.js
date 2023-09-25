import axios from "axios"

export default {
    namespaced: true,
    actions: {
        async fetchAllUsers(ctx) {
            //let res = await axios.get('http://127.0.0.1:8000/users').catch(
            //    err => console.log(err))
            //const datasets = res.data
            const datasets = {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                datasets: [
                    {
                        label: 'Взаимодействие',
                        backgroundColor: '#F3DE8A',
                        data: [
                            58,
                            70,
                            65,
                            49,
                            35,
                            29,
                            20,
                            28,
                            31,
                            40,
                            42,
                            36,
                        ]
                    },
                    {
                        label: '3.5 GPT',
                        backgroundColor: '#EB9486',
                        data: [
                            35,
                            42,
                            14,
                            17,
                            16,
                            24,
                            38,
                            40,
                            10,
                            15,
                            8,
                            12,
                        ]
                    },
                    {
                        label: '4.0 GPT',
                        backgroundColor: '#7E7F9A',
                        data: [
                            5,
                            6,
                            3,
                            4,
                            9,
                            8,
                            3,
                            2,
                            5,
                            7,
                            10,
                            4,
                        ]
                    }
                ]
            }
            ctx.commit('updateAllUsers', datasets)
        }
    },
    mutations: {
        updateAllUsers(state, datasets) {
            state.datasets = datasets
        }
    },
    state: {
        datasets: {}
    },
    getters: {
        allUsers(state) {
            return state.datasets
        }
    }
}