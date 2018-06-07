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
  [SET_USER](context, user, index) {
    context.commit(UPDATE_USER, user, index);
  },
  [ADD_USER](context, user) {
    context.commit(PUSH_USER, user);
  },
  [REMOVE_USER](context, index) {
    context.commit(DELETE_USER, index);
  },
  [SET_TEAMS](context) {
    context.commit(UPDATE_TEAMS, teams);
  },
  [SET_TEAM](context, team, index) {
    context.commit(UPDATE_TEAM, team, index);
  },
  [ADD_TEAM](context, team) {
    context.commit(PUSH_TEAM, team);
  },
  [REMOVE_TEAM](context, index) {
    context.commit(DELETE_TEAM, index);
  }
};

const mutations = {
  [UPDATE_USERS](state, users) {
    state.users = users;
  },
  [UPDATE_TEAMS](state, teams) {
    state.teams = teams;
  },
  [UPDATE_TEAM](state, team, index) {
    state.teams[index] = team;
  },
  [UPDATE_USER](state, user, index) {
    state.users[index] = user;
  },
  [DELETE_TEAM](state, index) {
    state.teams.splice(index, 1);
  },
  [DELETE_USER](state, index) {
    state.users.splice(index, 1);
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
