import Vue from 'vue'
import axios from 'axios'

const state = Vue.observable({
  loading: true
});

export const getters = {
  loading: () => state.loading
}

export const mutations = {
  setLoading: (val) => state.loading = val
}

export const actions = {
  // return axios
  // .get('')
  // .then((res) => {
  //     mutations.setLoading(data);
  // });
}
