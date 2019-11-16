<template>
  <span v-if="mode == 'timetable'">
    <v-simple-table :headers="headers" :items="timetable" class="elevation-1" hide-default-footer>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">発</th>
            <th class="text-left">着</th>
            <th class="text-left">備考</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in timetable" :key="index">
            <td :style="isDeparted(item.departure)">{{ item.departure }}</td>
            <td :style="isDeparted(item.departure)">{{ item.arrival }}</td>
            <td :style="isDeparted(item.departure)">{{item.remarks}}</td>
            <td :style="isDeparted(item.departure)">
              <v-btn
                color="primary"
                @click="showPriceTable(item.company, item.sortKey, item.departure, item.arrival)"
              >{{ item.sort }}</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center">
      <v-btn color="primary" @click="initialize" style="margin-top:10px;">地図に戻る</v-btn>
    </div>
  </span>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "発",
          value: "departure"
        },
        {
          text: "着",
          value: "arrival"
        },
        {
          text: "備考",
          value: "remarks"
        },
        {
          text: "",
          value: "sort"
        }
      ]
    };
  },
  computed: {
    ...mapState(["timetable", "mode"])
  },
  methods: {
    showPriceTable(comp, sort, dt, at) {
      this.$store.dispatch('getPriceTable', {company: comp, sort: sort, dt: dt, at: at})
    },
    isDeparted(time) {
      var now = this.$moment();
      var depTime = this.$moment(time, "HH:mm").toDate();
      if (now.isAfter(depTime)) {
        return "background-color: #d3d3d3;";
      }
      return "";
    },
    initialize() {
      this.$store.dispatch("initialize");
    }
  }
};
</script>