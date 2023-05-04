import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'


/* add icons to the library */
library.add(faUserSecret, faFacebookF, faInstagram, faYoutube)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')