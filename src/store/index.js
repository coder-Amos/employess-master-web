// eslint-disable-next-line vue/max-attributes-per-line
import Vue from 'vue'
import Vuex from 'vuex'
import dataApi from '@/api/index.js'

Vue.use(Vuex)
const state = {

}

const getters = {}

const mutations = {}

const actions = {
    store_login({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.login(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    store_get_employess_list({ commit },payload) {
        return new Promise((resolve, reject) => {
            dataApi.get_employess_list(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
export default store