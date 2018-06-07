'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import globals from './globals';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globals
  }
});
