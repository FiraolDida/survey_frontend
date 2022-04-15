import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id: 100,
        title: 'The fresh survey',
        slug: 'Fresh survey',
        status: 'draft',
        image: 'https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png',
        description: 'Created by Firaol dida',
        created_at: '2022-04-14 11:05:00',
        updated_at: '2022-04-14 11:05:00',
        expire_date: '2022-04-30 11:05:00',
        question: [
            {
                id: 1,
                type: 'select',
                question: 'From which country are you?',
                description: null,
                data: {
                    options: [
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea',
                            text: 'USA'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ae',
                            text: 'Georgia'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52qa',
                            text: 'Germany'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52aq',
                            text: 'India'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52az',
                            text: 'United Kingdom'
                        },
                    ]
                }
            },
            {
                id: 2,
                type: 'checkbox',
                question: 'Which language videos do you want to see on youtube?',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum ',
                data: {
                    options: [
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea',
                            text: 'Javascript'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ae',
                            text: 'PHP'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52qa',
                            text: 'HTML + CSS'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52aq',
                            text: 'All of the above'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52az',
                            text: 'Every thing fresh thinks will be food'
                        },
                    ]
                }
            },
            {
                id: 3,
                type: 'checkbox',
                question: 'Which PHP framework videos do you want to see on youtube?',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum ',
                data: {
                    options: [
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea',
                            text: 'Laravel'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ae',
                            text: 'Yii2'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52qa',
                            text: 'Codeigniter'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52aq',
                            text: 'Symfony'
                        },
                    ]
                }
            },
            {
                id: 4,
                type: 'radio',
                question: 'Which Laravel Framework do you love most?',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum ',
                data: {
                    options: [
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea',
                            text: 'Laravel 5'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ae',
                            text: 'Laravel 6'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52qa',
                            text: 'Laravel 7'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52aq',
                            text: 'Laravel 8'
                        },
                    ]
                }
            },
            {
                id: 5,
                type: 'checkbox',
                question: 'What type of projects do you want to see on youtube built with laravel',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum ',
                data: {
                    options: [
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea',
                            text: 'Rest API'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ae',
                            text: 'E-commerce'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52qa',
                            text: 'Real estate'
                        },
                        {
                            uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52aq',
                            text: 'All of the above'
                        },
                    ]
                }
            },
            {
                id: 6,
                type: 'text',
                question: 'What is your favourite youtube?',
                description: null,
                data: {}
            },
            {
                id: 7,
                type: 'textarea',
                question: 'What do you think about this survey?',
                description: 'Write your honst opinion. Everything is anonymous.',
                data: {}
            }
        ]
    },
    {
        id: 200,
        title: 'Laravel 8',
        slug: 'Laravel-8',
        status: 'active',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/640px-Laravel.svg.png',
        description: 'Laravel is a web application framework with expressive, elegrant syntax',
        created_at: '2022-04-14 11:05:00',
        updated_at: '2022-04-14 11:05:00',
        expire_date: '2022-04-30 11:05:00',
        question: []
    },
    {
        id: 300,
        title: 'Vue 3',
        slug: 'Vue-3',
        status: 'active',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png',
        description: 'Laravel is a web application framework with expressive, elegrant syntax',
        created_at: '2022-04-14 11:05:00',
        updated_at: '2022-04-14 11:05:00',
        expire_date: '2022-04-30 11:05:00',
        question: []
    },
    {
        id: 400,
        title: 'Tailwind 3',
        slug: 'tailwind-3',
        status: 'active',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png',
        description: 'Laravel is a web application framework with expressive, elegrant syntax',
        created_at: '2022-04-14 11:05:00',
        updated_at: '2022-04-14 11:05:00',
        expire_date: '2022-04-30 11:05:00',
        question: []
    }
]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN")
        },
        surveys: [...tmpSurveys],
        questionTypes: ['text', 'select', 'radio', 'checkbox', 'textarea'],
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data)
                    return data;
                })
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({ data }) => {
                    commit('setUser', data)
                    return data;
                })
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout')
                    return response
                })
        },
    },
    mutations: {
        logout: (state) => {
            state.user.data = {},
            state.user.token = null,
            sessionStorage.removeItem('TOKEN')
        },
        setUser: (state, userData) => {
            state.user.data = userData.user,
            state.user.token = userData.token,
            sessionStorage.setItem('TOKEN', userData.token)
        }
    },
    modules: {}
})

export default store;