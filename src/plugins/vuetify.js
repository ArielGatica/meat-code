import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
        light: {
          primary: '#D8AD3D',
          secondary: '#3F454A'
        }
    }
  }
});
