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
  }
})

export const getters = {
  mode: state => state.mode,
  mapState: state => state.mapState,
  navState: state => state.navState,
}

export const mutations = {
  setIslandData(state, val) {
    state.mode = 'searching',
    state.mapState.focusedIsland = val.island_name,
    state.navState.imageUrl = 'dummy.gif',
    state.navState.fromPorts = val.from_items
    state.navState.toPorts = val.to_items
    state.navState.timetable = val.timetable
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
  }
}
