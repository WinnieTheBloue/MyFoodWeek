import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index' 


// Vue.prototype.$http = axios;

createApp(App)
  .use(router)
  .mount('#app')
