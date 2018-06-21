<template>
  <div class="content">
    <b-card>
      <b-btn v-b-toggle.collapse1 variant="danger">Add event</b-btn>
      <b-collapse id="collapse1" class="mt-2">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="add-event">
          <b-form-group id="eventName"
                        label="Event Name:"
                        label-for="eventName">
            <b-form-input id="eventName"
                          type="text"
                          v-model="form.eventName"
                          required
                          placeholder="Enter the Event Name">
            </b-form-input>
          </b-form-group>
          <b-form-group id="eventTypeDropdown"
                        label="Event Type:"
                        label-for="eventType">
            <b-form-select id="eventType"
                          :options="eventType"
                          required
                          v-model="form.eventType">
            </b-form-select>
          </b-form-group>
          <b-form-group id="eventPointsDropdown"
                        label="Points Type:"
                        label-for="pointType">
            <b-form-select id="pointType"
                          :options="pointType"
                          required
                          v-model="form.pointType">
            </b-form-select>
          </b-form-group>
          <b-form-group label="<code>Status</code>">
            <b-form-radio-group id="eventStatus" v-model="form.status" :options="Status" name="eventStatus">
            </b-form-radio-group>
          </b-form-group>          
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>  
      </b-collapse>          
    </b-card>
    <b-card>
      <b-btn v-b-toggle.collapse2 variant="success">Show In Progress</b-btn>
      <b-collapse id="collapse2" class="mt-2">
        <b-list-group>
          <b-list-group-item v-for="event in inProgress" :key="event.id">{{event.eventName}}
            <b-button @click="edit(event)" variant="secondary">Edit</b-button>
            <b-button v-b-modal.del @click="setCurrentEvent(event)" variant="danger">Delete</b-button>         
          </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card>
    <b-modal id="del" title="Delete an event" ok-title="Yes" cancel-title="No" @ok="del(event)">
      Are you sure you want to delete this event ?
    </b-modal>   
    <b-card>
      <b-btn v-b-toggle.collapse3 variant="warning">Show pending</b-btn>
      <b-collapse id="collapse3" class="mt-2">
        <b-list-group>
          <b-list-group-item v-for="event in pending" :key="event.id">{{event.eventName}}</b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card>
    <b-card>
      <b-btn v-b-toggle.collapse4 variant="primary">Show Completed</b-btn>
      <b-collapse id="collapse4" class="mt-2">
        <b-list-group>
          <b-list-group-item v-for="event in completed" :key="event.id">{{event.eventName}}</b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>

  const events = [{
    id: 1,
    eventName: 'Carroms',
    eventType: 'Individual Event',
    status: 'in_progress',
    results: [],
    fixtures: [],
    points: [15,10,7]
  }, {
    id: 2,
    eventName: 'Chess',
    eventType: 'Individual Event',
    status: 'pending',
    results: [],
    fixtures: [],
    points: [15,10,7]
  }, {
    id: 3,
    eventName: 'Intro',
    eventType: 'Individual Event',
    status: 'completed',
    results: [['Heracles', 'Spartans'], 'Kratos', 'Olympus'],
    fixtures: [],
    points: [15,10,7]
  }, {
    id: 4,
    eventName: 'NFS',
    eventType: 'Individual Event',
    status: 'pending',
    results: [],
    fixtures: [],
    points: [10,7,5]
  }, {
    id: 5,
    eventName: 'Monthly Event June - FIFA Predictor',
    eventType: 'Individual Event',
    status: 'in_progress',
    results: [],
    fixtures: [],
    points: [10,7,5]
  }, {
    id: 6,
    eventName: 'Monthly Event June - Photography Contest',
    eventType: 'Individual Event',
    status: 'completed',
    results: ['Heracles', 'Heracles', 'Spartans'],
    fixtures: [],
    points: [10,7,5]
  }];

  const form = {
      eventName: '',
      eventType: null,
      pointType: null,
      points: [],
      status: 'pending',
      id: null
  }; 

  const eventType = [
    { text: 'Select One', value: null },
    'Team Event', 'Individual Event'];

  const pointType = [
    { text: 'Select One', value: null },
    'Major Event', 'Monthly Event'];

  const Status = ['pending', 'in_progress', 'completed'];

  export default {
    name: 'Events',
    data() {
      return {
        events,
        form,
        eventType,
        pointType,
        Status,
        show: true,
        event: null
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
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        this.form.points = this.form.pointType === 'Major Event' ? [15,10,7] : [10,7,5];
        this.form.id = Math.floor(Math.random() * Math.floor(100));
        var newEvent = Object.assign({}, this.form);
        events.push(newEvent);
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.eventName = '';
        this.form.eventType = null;
        this.form.pointType = null;
        this.form.points = [];
        this.form.status = 'pending';
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      },
      setCurrentEvent (event) {
        this.event = event;
      },
      edit (event) {
        alert(JSON.stringify(event));
      },
      del (event) {
        events.splice(events.findIndex(e => e.id === event.id),1);
      }
    }
  };
</script>

<style scoped>
  .content {
    padding: 10px;
  }
  .add-event {
    padding-left: 35%;
    padding-right: 35%;
  }
</style>
