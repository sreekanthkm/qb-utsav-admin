<template>
  <div>
    <header-view/>
    <router-view/>
    <footer-view/>
  </div>
</template>

<script>
  import HeaderView from'./components/HeaderView';
  import FooterView from'./components/FooterView';
  import { SET_TEAMS, SET_USERS } from './types/actions';

  export default {
    name: 'App',
    components: {
      HeaderView,
      FooterView
    },
    mounted() {
      this.$store.dispatch(SET_TEAMS);
      this.$store.dispatch(SET_USERS);
    }
  }
</script>

<style>
</style>
