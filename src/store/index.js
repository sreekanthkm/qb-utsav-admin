'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import globals from './globals';
import events from './events';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globals,
    events
  }
});
