import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import chUI from './components/chUI';

const app = createApp(App)

// my ui library
chUI.forEach(component => app.component(component.name, component))

app.use(store).mount('#app')
