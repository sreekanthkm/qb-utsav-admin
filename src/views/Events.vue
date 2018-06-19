<template>
  <div class="content">
    <b-card>
      <b-btn>Add event</b-btn>
    </b-card>
    <b-card>
      <b-btn v-b-toggle.collapse3 variant="success">Show In Progress</b-btn>
      <b-collapse id="collapse3" class="mt-2">
        <b-list-group>
          <b-list-group-item v-for="event in inProgress" :key="event.id">{{event.name}}</b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card>
    <b-card>
      <b-btn v-b-toggle.collapse1 variant="warning">Show pending</b-btn>
      <b-collapse id="collapse1" class="mt-2">
        <b-list-group>
          <b-list-group-item v-for="event in pending" :key="event.id">{{event.name}}</b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card>
    <b-card>
      <b-btn v-b-toggle.collapse2 variant="primary">Show Completed</b-btn>
      <b-collapse id="collapse2" class="mt-2">
        <b-list-group>
          <b-list-group-item v-for="event in completed" :key="event.id">{{event.name}}</b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  const events = [{
    id: 1,
    name: 'Carroms',
    status: 'in_progress',
    results: [],
    fixtures: []
  }, {
    id: 2,
    name: 'Chess',
    status: 'pending',
    results: [],
    fixtures: []
  }, {
    id: 3,
    name: 'Intro',
    status: 'completed',
    results: [],
    fixtures: []
  }];

  export default {
    name: 'Events',
    data() {
      return {
        events
      };
    },
    computed: {
      completed() {
        return this.events.filter(function(item) {
          return item.status === 'completed';
        });
      },
      inProgress() {
        return this.events.filter(function(item) {
          return item.status === 'in_progress';
        });
      },
      pending() {
        return this.events.filter(function(item) {
          return item.status === 'pending';
        });
      }
    }
  };
</script>

<style scoped>
  .content {
    padding: 10px;
  }
</style>
