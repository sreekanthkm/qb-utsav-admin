'use strict';

import {
  SET_TEAMS,
  SET_TEAM,
  SET_USERS,
  SET_USER,
  ADD_USER,
  REMOVE_USER,
  ADD_TEAM,
  REMOVE_TEAM
} from '../types/actions';
import {
  UPDATE_TEAMS,
  UPDATE_USERS,
  UPDATE_TEAM,
  UPDATE_USER,
  DELETE_TEAM,
  DELETE_USER,
  PUSH_TEAM,
  PUSH_USER
} from '../types/mutations';

const users = [
  {
    employee_id: 2570,
    name: 'Sreekanth Mukundan',
    isAllocated: true,
    team: '1',
    price: 50
  },
  { employee_id: 6521, name: 'asdsadsadsa', isAllocated: false },
  {
    employee_id: 9841,
    name: 'sadsadlo,kdsa,',
    isAllocated: true,
    team: '3',
    price: 100
  },
  { employee_id: 6953, name: 'odfkbfdbdf', isAllocated: false }
];
const teams = ['1', '2', '3', '4'];

const state = {
  users: [],
  teams: []
};

const actions = {
  [SET_USERS](context) {
    context.commit(UPDATE_USERS, users);
  },
  [SET_USER](context, user) {
    context.commit(UPDATE_USER, user);
  },
  [ADD_USER](context, user) {
    context.commit(PUSH_USER, user);
  },
  [REMOVE_USER](context, user) {
    context.commit(DELETE_USER, user);
  },
  [SET_TEAMS](context) {
    context.commit(UPDATE_TEAMS, teams);
  },
  [SET_TEAM](context, team) {
    context.commit(UPDATE_TEAM, team);
  },
  [ADD_TEAM](context, team) {
    context.commit(PUSH_TEAM, team);
  },
  [REMOVE_TEAM](context, team) {
    context.commit(DELETE_TEAM, team);
  }
};

const mutations = {
  [UPDATE_USERS](state, users) {
    state.users = users;
  },
  [UPDATE_TEAMS](state, teams) {
    state.teams = teams;
  },
  [UPDATE_TEAM](state, team) {
    const indexToUpdate = state.teams.findIndex(teamObj => {
      return team.id === teamObj.id;
    });
    state.teams[indexToUpdate] = team;
  },
  [UPDATE_USER](state, user) {
    const indexToUpdate = state.users.findIndex(userObj => {
      return user.employee_id === userObj.employee_id;
    });
    state.users[indexToUpdate] = user;
  },
  [DELETE_TEAM](state, obj) {
    const indexToDelete = state.teams.findIndex((team) => {
      return obj.id === team.id;
    });
    state.teams.splice(indexToDelete, 1);
  },
  [DELETE_USER](state, obj) {
    const indexToDelete = state.users.findIndex((user) => {
      return obj.employee_id === user.employee_id;
    });
    state.users.splice(indexToDelete, 1);
  },
  [PUSH_TEAM](state, team) {
    state.teams.push(team);
  },
  [PUSH_USER](state, user) {
    state.users.push(user);
  }
};

const getters = {
  users(state) {
    return state.users;
  },
  teams(state) {
    return state.teams;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
