<template>
  <div class="content">
    <b-row class="my-1">
      <b-col sm="2"><label>Event:</label></b-col>
      <b-col sm="10">
        <b-form-select v-model="selected" :options="options" class="mb-3" size="sm"></b-form-select>
      </b-col>
    </b-row>
    <b-btn variant="success" :disabled="!selected" @click="addFixture">Add fixture</b-btn>
    <b-list-group>
      <b-list-group-item v-for="fixture in fixtures" :key="fixture.by">
        <b-row class="my-1">
          <b-col sm="5">{{fixture.by}}</b-col>
          <b-col sm="2"> vs </b-col>
          <b-col sm="5">{{fixture.vs}}</b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
  const options = ['Carroms'];
  const fixtures = [{
    by: 'Sreekanth',
    vs: 'kittunni'
  }];

  export default {
    name: 'Events',
    data() {
      return {
        selected : null,
        options,
        fixtures
      }
    },
    methods: {
      addFixture() {

      }
    }
  };
</script>

<style scoped>
  .content {
    padding: 10px;
  }
</style>
