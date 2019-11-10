<template>
  <v-data-table :headers="headers" :items="timetable" class="elevation-1" hide-default-footer>
    <template v-slot:items="props">
      <td :style="isDeparted(props.item.departure)">{{ props.item.departure }}</td>
      <td :style="isDeparted(props.item.departure)">{{ props.item.arrival }}</td>
      <td :style="isDeparted(props.item.departure)">{{props.item.remarks}}</td>
      <td :style="isDeparted(props.item.departure)">
        <v-btn
          color="primary"
          @click="showPriceTable(props.item.company, props.item.sortKey, props.item.departure, props.item.arrival)"
        >{{ props.item.sort }}</v-btn>
      </td>
    </template>
  </v-data-table>
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
    ...mapState(["timetable"])
  },
  methods: {
    showPriceTable(comp, sort, dt, at) {
      //this.$store.dispatch('getPriceTable', {company: comp, sort: sort, dt: dt, at: at})
    },
    isDeparted(time) {
      var now = this.$moment();
      var depTime = this.$moment(time, "HH:mm").toDate();
      if (now.isAfter(depTime)) {
        return "background-color: #d3d3d3;";
      }
      return "";
    }
  }
};
</script>