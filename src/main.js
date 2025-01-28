import { createApp, defineAsyncComponent } from 'vue'

import './styles/main.styl'
const factory = (component, props = {}) => {
  const app = createApp(component, props)
  return app
}

const App = defineAsyncComponent(() => import('./App.vue'))
const main = factory(App)
main.mount('#app')