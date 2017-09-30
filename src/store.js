'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import persistPlugin from './utils/persistPlugin';

Vue.use(Vuex);

function randomId() {
    return parseInt(Math.random() * 10000000000);
}

const basicState = {
    games: {
        testId: {
            title: 'SampleGame',
            players: [
                {
                    id: 123,
                    name: 'Igor',
                    score: 21
                }
            ]
        }
    }
};

const mutations = {
    incrementLog(state, payload) {
        state.log = state.log.concat(payload);
    },
    restoreState() {
        // state.games = payload.games;
    }
};

const actions = {
    incrementLog({ commit, state }, payload) {
        commit('incrementLog', Object.assign({ id: randomId() }, payload));
    }
};
const store = new Vuex.Store({
    state: basicState,
    actions,
    mutations,
    plugins: [persistPlugin]
});

export default store;
