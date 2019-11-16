<template>
  <div>
    <Map v-if="mapVisible" />
    <Timetable />
    <MobileNav v-if="mode == 'mobile-search'" />

    <PriceDialog />
    <Snackbar />
  </div>
</template>

<script>
import Map from "@/components/Common/Map.vue";
import Timetable from "@/components/Common/Timetable.vue";
import PriceDialog from "@/components/Common/PriceDialog.vue";
import Snackbar from "@/components/Common/Snackbar.vue";
import MobileNav from "@/components/Mobile/Navigation.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Map,
    Timetable,
    PriceDialog,
    Snackbar,
    MobileNav
  },
  computed: {
    ...mapGetters(["mode"]),

    mapVisible() {
      if (this.mode == "timetable" || this.mode == "mobile-search") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>
