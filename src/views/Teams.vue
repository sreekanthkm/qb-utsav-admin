<template>
  <div class="content">
    <b-container fluid>
      <b-row>
        <b-col md="4" class="my-1">
          <b-btn variant="success" @click="showModal">Add</b-btn>
        </b-col>
      </b-row>
    </b-container>
    <b-modal ref="addTeamModal" title="Add Team" size="lg" @ok="handleOk">
      <form @submit.stop.prevent="handleOk">
        <b-form-group horizontal label="Enter team name" :invalid-feedback="invalidFeedback"
                      :state="state">
          <b-form-input :state="state" v-model.trim="name"></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <b-list-group>
      <b-list-group-item v-for="team in teams" :key="team.name">{{team}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { REMOVE_TEAM, ADD_TEAM, SET_TEAM } from '../types/actions';

  export default {
    name: "Teams",
    data() {
      return {
        name: '',
      }
    },
    computed: {
      state() {
        return this.name.length > 0;
      },
      invalidFeedback() {
        if (this.name.length === 0) {
          return 'Please enter something';
        } else {
          return '';
        }
      },
      ...mapState({
        teams: state => state.globals.teams,
        users: state => state.globals.users
      })
    },
    methods: {
      showModal() {
        this.$refs.addTeamModal.show();
      },
      handleOk(evt) {
        evt.preventDefault();
        if (this.name) {
          this.handleSubmit();
        }
      },
      clearName () {
        this.name = ''
      },
      handleSubmit() {
        this.$store.dispatch(ADD_TEAM, this.name);
        this.$refs.addTeamModal.hide();
        this.clearName();
      }
    }
  }
</script>

<style scoped>
  .content {
    padding: 10px;
  }
</style>
