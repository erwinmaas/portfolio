import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"
import Vue from "vue"

require('./bootstrap');
window.Vue = Vue;

const apolloProvider = new VueApollo({
    defaultClient: new ApolloClient({
        uri: "/graphql"
    })
});

Vue.use(VueApollo);

import ProjectsPage from './components/ProjectsPage.vue';
Vue.component('ProjectsPage', ProjectsPage);

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    apolloProvider
});
