<template>
  <div class="content">
    <b-container fluid>
      <b-row>
        <b-col md="4" class="my-1">
          <b-form-group horizontal label="Filter" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="1" class="my-1">
          <b-button variant="success" @click="add">Add user</b-button>
        </b-col>
        <b-col md="7" class="my-1">
          <b-input-group>
            <b-form-file v-model="file" placeholder="Import from csv..."></b-form-file>
            <b-input-group-append>
              <b-button :disabled="!file" @click="upload">Upload</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
      <b-table show-empty responsive hover :items="users" :fields="fields" :filter="filter" caption-top>
        <template slot="table-caption">
          Users
        </template>
        <template slot="index" slot-scope="data">
          {{data.index + 1}}
        </template>
        <template slot="actions" slot-scope="row">
          <b-button variant="primary" size="sm" @click="edit(row.item)" class="mr-1">
            Edit
          </b-button>
          <b-button variant="danger" size="sm" @click="remove(row.item)" class="mr-1">
            Remove
          </b-button>
        </template>
      </b-table>
    </b-container>
    <b-modal ref="editUserModal" title="Edit user" size="lg" @ok="handleOk">
      <form @submit.stop.prevent="handleOk">
        <b-form-group horizontal label="Emp Id">
          <b-form-input type="number" v-model.trim="selectedUser.employee_id"></b-form-input>
        </b-form-group>
        <b-form-group horizontal label="Name">
          <b-form-input v-model.trim="selectedUser.name"></b-form-input>
        </b-form-group>
        <b-form-group label="Allocate">
          <b-form-radio-group v-model="selectedUser.isAllocated" v-on:change="onAllocationChange">
            <b-form-radio v-bind:value="true">Yes</b-form-radio>
            <b-form-radio v-bind:value="false">No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <div v-if="selectedUser.isAllocated">
          <b-form-group horizontal label="Value">
            <b-form-input type="number" v-model.trim="selectedUser.price"></b-form-input>
          </b-form-group>
          <b-form-group horizontal label="Team">
            <b-form-select v-model="selectedUser.team" :options="teams" class="mb-3"></b-form-select>
          </b-form-group>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { REMOVE_USER, ADD_USER, SET_USER } from '../types/actions';
  const fields = [
    'index',
    {
      key: 'employee_id',
      sortable: true
    }, {
      key: 'name',
      sortable: true
    }, {
      key: 'isAllocated',
      sortable: false
    },{
      key: 'team',
      sortable: true
    },{
      key: 'price',
      sortable: true
    }, { key: 'actions', label: 'Actions' }];

  export default {
    name: 'Users',
    data() {
      return {
        fields,
        filter: null,
        selectedUser: {},
        isEditing: false,
        file: null
      };
    },
    methods: {
      add() {
        this.isEditing = false;
        this.selectedUser = { isAllocated: false };
        this.$refs.editUserModal.show();
      },
      remove(row) {
        this.$store.dispatch(REMOVE_USER, row);
      },
      edit(row) {
        this.isEditing = true;
        this.selectedUser = Object.assign({}, row);
        this.$refs.editUserModal.show();
      },
      onAllocationChange(evt) {
        if (!evt) {
          delete this.selectedUser.team;
          delete this.selectedUser.price;
        }
      },
      handleOk(evt) {
        evt.preventDefault();
        if (!this.selectedUser.isAllocated || this.selectedUser.team && this.selectedUser.price) {
          if (this.isEditing) {
            this.filter = '';
            this.$store.dispatch(SET_USER, this.selectedUser);
          } else {
            this.$store.dispatch(ADD_USER, this.selectedUser);
          }
          this.$refs.editUserModal.hide();
        }
      },
      upload() {
        console.log(this.file);
      }
    },
    computed: {
      ...mapState({
        teams: state => state.globals.teams,
        users: state => state.globals.users
      })
    }
  };
</script>

<style scoped>
  .content {
    padding: 10px;
  }
</style>
