<template>
  <div>
    <Map v-if="mapVisible" />
    <Timetable v-if="mode == 'timetable'" />
    <PriceDialog />
    <Snackbar />
  </div>
</template>

<script>
import Map from "@/components/Common/Map.vue";
import Timetable from "@/components/Common/Timetable.vue";
import PriceDialog from "@/components/Common/PriceDialog.vue";
import Snackbar from "@/components/Common/Snackbar.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Map, Timetable, PriceDialog, Snackbar
  },
  computed: {
    ...mapGetters(["mode"]),

    mapVisible() {
      if (this.mode == 'timetable' || this.mode == 'mobile-search') {
        return false
      } else {
        return true
      }
    },
  },
};
</script>
