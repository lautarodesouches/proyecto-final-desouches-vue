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
        loading: false,
        notification: ''
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
        getNotification: state => { return state.notification },
    },
    mutations: {
        setCart(state, payload) {
            state.cart = payload
        },
        setStores(state, payload) {
            state.stores = payload
        },
        setUser(state, payload) {
            state.user = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setNotification(state, payload) {
            state.notification = payload
        },
        addOneItemToProductInCart(state, payload) {
            state.cart.map(product => product.id === payload && product.qty++)
        },
        addProductToCart(state, payload) {
            state.cart.push({ ...payload, qty: 1 })
        },
        removeFromCart(state, payload) {
            state.cart = state.cart.filter(product => product.id !== payload)
        },
        clearCart(state) {
            state.cart = []
        }
    },
    actions: {
        setError(context, error) {
            context.commit('setError', error)
        },
        setUser(context, user) {
            context.commit('setUser', user)
        },
        setNotification(context, message) {
            context.commit('setNotification', message)
        },
        startLoading(context) {
            context.commit('setLoading', true)
        },
        finishLoading(context) {
            context.commit('setLoading', false)
        },
        fetchStores(context) {

            context.commit('setNotification', 'Cargando')

            context.dispatch('startLoading')

            axios.get(`${API_URL}stores`)
                .then(response => {

                    let stores = response.data

                    axios.get(`${API_URL}products`)
                        .then(response => {

                            stores.map(store => {
                                store.products = response.data.filter(product => product.storeId === parseInt(store.id))
                            })

                        })
                        .finally(() => {
                            context.commit('setStores', stores)
                            context.dispatch('finishLoading')
                        })

                })

        },
        addProduct(context, product) {

            context.dispatch('startLoading')

            axios.post(`${API_URL}products`, product)
                .catch(error => context.commit('setError', error))
                .finally(() => context.dispatch('finishLoading'))

        },
        addStore(context, store) {

            context.dispatch('startLoading')

            axios.post(`${API_URL}stores`, store)
                .catch(error => context.commit('setError', error))
                .finally(() => context.dispatch('finishLoading'))

        },
        addToCart(context, product) {

            let productInCart = context.state.cart.find(productInCart => productInCart.id === product.id)

            if (productInCart) {
                context.commit('addOneItemToProductInCart', productInCart.id)
            } else {
                context.commit('addProductToCart', product)
            }

        },
        removeFromCart(context, productId) {
            context.commit('removeFromCart', productId)
        },
        clearCart(context) {
            context.commit('clearCart')
        },
        deleteProduct(context, productId) {

            context.dispatch('startLoading')

            axios.delete(`${API_URL}products/${productId}`)
                .catch(error => context.commit('setError', error))
                .finally(() => {
                    context.dispatch('fetchStores')
                    context.dispatch('finishLoading')
                })

        }
    },
    modules: {

    }
})