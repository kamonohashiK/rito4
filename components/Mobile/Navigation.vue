<template>
  <span style="margin-top:100px;">
    <Route
      v-if="
        mode != 'default' && navState.timetable && navState.arrivals.length != 0
      "
    />
    <ArrivalPorts
      v-if="
        mode != 'default' && navState.timetable && navState.arrivals.length != 0
      "
    />

    <NoData v-if="mode != 'default' && !navState.timetable" />

    <span
      v-if="
        mode != 'default' && navState.timetable && navState.arrivals.length == 0
      "
    >
      <ToPorts />
      <FromPorts />
    </span>
  </span>
</template>

<script>
import Top from "@/components/Navigation/Top.vue";
import Selector from "@/components/Navigation/Selector.vue";
import NoData from "@/components/Navigation/NoData.vue";
import ToPorts from "@/components/Navigation/ToPorts.vue";
import FromPorts from "@/components/Navigation/FromPorts.vue";
import ArrivalPorts from "@/components/Navigation/ArrivalPorts.vue";
import Route from "@/components/Navigation/Route.vue";

import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Top,
    Selector,
    NoData,
    ToPorts,
    FromPorts,
    ArrivalPorts,
    Route
  },
  data() {
    return {
      hoge: false
    }
  },
  computed: {
    ...mapState(["mode", "mapState", "navState", "route"])
  }
};
</script>
