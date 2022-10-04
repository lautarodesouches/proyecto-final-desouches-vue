import Vuex from 'vuex'
// -----------------------------------------------
import axios from 'axios'
import { API_URL } from '../utils/api.js'
// -----------------------------------------------
export default new Vuex.Store({
    state: {
        cart: [],
        stores: [],
        user: null,
        error: null,
        loading: true
    },
    getters: {
        getCart: state => { return state.cart },
        getCartSubtotal: state => {
            return state.cart.reduce((acc, item) => acc += (item.price - item.price * item.discount / 100) * item.qty, 0)
        },
        getStores: state => { return state.stores },
        getUser: state => { return state.user },
        getError: state => { return state.error },
        getLoading: state => { return state.loading },
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        setUser(state, payload) {
            state.user = payload
        },
        getStores(state) {

            state.loading = true

            axios.get(`${API_URL}stores`)
                .then(response => {

                    state.stores = response.data

                    axios.get(`${API_URL}products`)
                        .then(response => {

                            state.stores.map(store => {
                                store.products = response.data.filter(product => product.storeId === parseInt(store.id))
                            })

                        })
                        .finally(() => state.loading = false)

                })

        },
        addProduct(state, payload) {

            state.loading = true

            axios.post(`${API_URL}products`, payload)
                .catch(error => state.error = error)
                .finally(() => state.loading = false)

        },
        addStore(state, payload) {

            state.loading = true

            axios.post(`${API_URL}stores`, payload)
                .catch(error => state.error = error)
                .finally(() => state.loading = false)

        },
        addToCart(state, payload) {

            let productInCart = state.cart.find(product => product.id === payload.id)

            if (productInCart) {
                state.cart.map(product => product.id === payload.id && product.qty++)
            } else {
                state.cart.push({ ...payload, qty: 1 })
            }

            console.log(state.cart);

        },
        removeFromCart(state, payload) {
            state.cart = state.cart.filter(product => product.id !== payload)
        },
        clearCart(state) {
            state.cart = []
        },
        deleteProduct(state, payload) {
            state.loading = true

            axios.delete(`${API_URL}products`, payload)
                .catch(error => state.error = error)
                .finally(() => state.loading = false)
        }
    },
    actions: {
        setLoading(context, isLoading) {
            context.commit('setLoading', isLoading)
        },
        setError(context, error) {
            context.commit('setError', error)
        },
        setUser(context, user) {
            context.commit('setUser', user)
        },
        getStores(context) {
            context.commit('getStores')
        },
        addProduct(context, product) {
            context.commit('addProduct', product)
        },
        addStore(context, store) {
            context.commit('addStore', store)
        },
        addToCart(context, product) {
            context.commit('addToCart', product)
        },
        removeFromCart(context, productId) {
            context.commit('removeFromCart', productId)
        },
        clearCart(context) {
            context.commit('clearCart')
        },
        deleteProduct(context, productId) {
            context.commit('deleteProduct', productId)
        }
    },
    modules: {

    }
})