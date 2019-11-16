import jsonData from '~/assets/index.json'
import axios from 'axios'

export const state = () => ({
  mode: 'default',
  mapState: {
    focusedIsland: '',
    focusedLocale: '',
    center: {
      lat: 33.865053,
      lng: 132.709476
    }, //しばらくは三津浜港の位置で固定
    zoom: 9,
    markers: jsonData.index_items,
  },
  navState: {
    isShown: false,
    imageUrl: '',
    timetable: false,
    fromPorts: [],
    toPorts: [],
    arrivals: []
  },
  snackBarState: {
    isShown: false,
    status: '',
    text: ''
  },
  route: {
    departure: '',
    departureCoordinate: {},
    arrival: ''
  },
  timetable: [],
  //料金表
  priceTable: {},

  //カレンダー用に出発時・到着時をセット
  departureTime: "",
  arrivalTime: "",

  priceDialog: false,
})

export const getters = {
  mode: state => state.mode,
  mapState: state => state.mapState,
  navState: state => state.navState,
  route: state => state.route,
  timetable: state => state.timetable,
  snackBarState: state => state.snackBarState,
}

export const mutations = {
  setIslandData(state, val) {
    state.mode = 'searching',
      state.mapState.focusedIsland = val.island_name,
      state.mapState.focusedLocale = val.locale,
      state.navState.imageUrl = 'dummy.gif',
      state.navState.fromPorts = val.from_items
    state.navState.toPorts = val.to_items
    state.navState.timetable = val.timetable
  },

  setDeparture(state, val) {
    state.route.departure = val.name
    state.route.departureCoordinate = val.coordinate
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
  },

  setPriceTable(state, val) {
    state.priceTable = val
  },

  setDepartureTime(state, val) {
    state.departureTime = val
  },

  setArrivalTime(state, val) {
    state.arrivalTime = val
  },

  changePriceDialogFlag(state, val) {
    state.priceDialog = val
  },

  changeMapCenter(state, val) {
    state.mapState.center = val
    state.mapState.zoom = 11
  },

  pushMarker(state, val) {
    if (state.route.departure != '') {
      state.mapState.markers = [state.route.departureCoordinate]
    } else {
      state.mapState.markers = [{
        position: state.mapState.center
      }]
    }
    state.mapState.markers.push(val)
  },

  rollbackMarker(state) {
    state.mapState.markers = [state.route.departureCoordinate]
  },

  resetMarker(state) {
    state.mapState.markers = jsonData.index_items
  },

  changeSnackState(state) {
    state.snackBarState.isShown = !state.snackBarState.isShown
  },

  setSnackState(state, val) {
    state.snackBarState.status = val.status
    state.snackBarState.text = val.text
  },

  changeNavFlag(state) {
    state.navState.isShown = !state.navState.isShown
  },

  initialize(state) {
    state.mode = 'default'
    state.mapState.focusedIsland = '',
      state.mapState.markers = jsonData.index_items,
      state.navState = {
        imageUrl: '',
        timetable: false,
        fromPorts: [],
        toPorts: [],
        arrivals: []
      },
      state.route = {
        departure: '',
        arrival: ''
      },
      state.timetable = []
  },
}

export const actions = {
  async focusIsland({
    commit,
    state
  }, idx) {
    var target = state.mapState.markers[idx]

    await axios.get(process.env.API_ENDPOINT + 'island?island_name=' + target.search_key)
      .then((res) => {
        commit('changeMapCenter', target.position)
        commit('setIslandData', {
          island_name: target.title,
          locale: target.locale,
          from_items: res.data.from_items,
          to_items: res.data.to_items,
          timetable: target.timetable
        })
      })
      .catch(error => console.log(error))
  },

  selectDeparture({
    commit,
    state
  }, val) {
    if (val.fromOrTo == 'from') {
      commit('setDeparture', {
        name: state.navState.fromPorts[val.index].name,
        coordinate: {
          position: state.navState.fromPorts[val.index].position
        }
      })
      commit('setArrivalPorts', state.navState.fromPorts[val.index].to)
    } else {
      commit('setDeparture', {
        name: state.navState.toPorts[val.index].name,
        coordinate: {
          position: state.navState.toPorts[val.index].position
        }
      })
      commit('setArrivalPorts', state.navState.toPorts[val.index].to)
    }
  },

  async selectArrival({
    commit,
    state
  }, val) {
    var arrival = state.navState.arrivals[val.index].name
    commit('setArrival', arrival)
    await axios.get(process.env.API_ENDPOINT + 'timetable?dep=' + state.route.departure + val.suffix + '&des=' + state.route.arrival + val.suffix)
      .then((res) => {
        commit('setTimetable', res.data.timeTable)
      })
      .catch(error => console.log(error))
  },

  async getPriceTable({
    commit
  }, val) {
    await axios.get(process.env.API_ENDPOINT + 'pricetable?company=' + val.company + '&sort=' + val.sort)
      .then((res) => {
        commit('setPriceTable', res.data.priceTable)
        commit('setDepartureTime', val.dt)
        commit('setArrivalTime', val.at)
        commit('changePriceDialogFlag', true)
      })
      .catch(error => console.log(error))
  },

  sendRequest({
    commit,
    state
  }) {
    axios.post(process.env.API_ENDPOINT + 'post-info', {
        island_name: state.mapState.focusedIsland,
        island_area: state.mapState.focusedLocale,
        content: 'この島への時刻表リクエストが送信されました。データ集めよう',
        app_id: 1
      })
      .then((res) => {
        if (res.status == '200') {
          commit('setSnackState', {
            status: 'success',
            text: 'リクエストを送信しました。'
          })
          commit('changeSnackState')
        } else {
          commit('setSnackState', {
            status: 'error',
            text: 'リクエストの送信に失敗しました。'
          })
          commit('changeSnackState')
        }
      })
      .catch(error =>
        commit('setSnackState', {
          status: 'error',
          text: 'リクエストの送信に失敗しました。'
        })
      )
    setTimeout(commit('changeSnackState'), 5000)
  },

  initialize({
    commit
  }) {
    commit('initialize')
  }
}
