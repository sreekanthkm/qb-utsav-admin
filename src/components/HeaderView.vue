<template>
  <b-navbar type="dark" variant="info" toggleable="md">
    <b-navbar-brand to="/">Admin</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="events">Events</b-nav-item>
        <b-nav-item to="teams">Teams</b-nav-item>
        <b-nav-item to="users">Users</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'HeaderView'
  }
</script>

<style scoped>

</style>
