import jsonData from '~/assets/index.json'
import axios from 'axios'

export const state = () => ({
  mode: 'default',
  mapState: {
    focusedIsland: '',
    center: {
      lat: 33.865053,
      lng: 132.709476
    }, //しばらくは三津浜港の位置で固定
    zoom: 9,
    markers: jsonData.index_items,
  },
  navState: {
    imageUrl: '',
    timetable: false,
    fromPorts: [],
    toPorts: [],
    arrivals: []
  },
  route: {
    departure: '',
    arrival: ''
  },
  timetable: []
})

export const getters = {
  mode: state => state.mode,
  mapState: state => state.mapState,
  navState: state => state.navState,
  route: state => state.route,
  timetable: state => state.timetable,
}

export const mutations = {
  setIslandData(state, val) {
    state.mode = 'searching',
    state.mapState.focusedIsland = val.island_name,
    state.navState.imageUrl = 'dummy.gif',
    state.navState.fromPorts = val.from_items
    state.navState.toPorts = val.to_items
    state.navState.timetable = val.timetable
  },

  setDeparture(state, val) {
    state.route.departure = val
  },

  setArrival(state, val) {
    state.route.arrival = val
  },

  setArrivalPorts(state, val) {
    state.navState.arrivals = val
  },

  setTimetable(state, val) {
    state.timetable = val
    state.mode = 'timetable'
  }
}

export const actions = {
  async focusIsland({
    commit,
    state
  }, id) {
    var target = state.mapState.markers[id]

    await axios.get(process.env.API_ENDPOINT + 'island?island_name=' + target.search_key)
      .then((res) => {
        commit('setIslandData', {
          island_name: target.title,
          from_items: res.data.from_items,
          to_items: res.data.to_items,
          timetable: target.timetable
        })
      })
      .catch(error => console.log(error))
    /*
        commit('changeMapPosition', {
          position: target.position,
          zoom: 11
        })
        commit('changeFocusedIsland', {
          name: target.title,
          locale: target.locale,
          picture_url: 'https://d1uz5bvy6659fw.cloudfront.net/' + target.search_key + '/' + target.top_img + '.jpg',
          slide_items: target.slide_items,
          timetable: target.timetable,
          search_key: target.search_key
        })
      },
    */
  },

  selectDeparture({commit, state}, val){
    if (val.fromOrTo == 'from') {
      commit('setDeparture', state.navState.fromPorts[val.index].name)
      commit('setArrivalPorts', state.navState.fromPorts[val.index].to)
    } else {
      commit('setDeparture', state.navState.toPorts[val.index].name)
      commit('setArrivalPorts', state.navState.toPorts[val.index].to)
    }
  },

  async selectArrival({commit, state}, val) {
    var arrival = state.navState.arrivals[val.index].name
    commit('setArrival', arrival)
    await axios.get(process.env.API_ENDPOINT + 'timetable?dep=' + state.route.departure + val.suffix + '&des=' + state.route.arrival + val.suffix)
      .then((res) => {
        commit('setTimetable', res.data.timeTable)
      })
      .catch(error => console.log(error))
  }
}
