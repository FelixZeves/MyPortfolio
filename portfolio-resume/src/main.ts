import { createApp } from 'vue'
import App from './App.vue'

import { Notify, Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import './assets/styles/main.scss'
import './assets/styles/fonts.css'

import router from './router'

const app = createApp(App)

app.use(router)
app.use(Quasar, {
    plugins: {Notify},
    iconSet: quasarIconSet
})

app.mount('#app')
