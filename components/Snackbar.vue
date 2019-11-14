<template>
  <v-snackbar
    v-model="snackBarState.isShown"
    :color="snackBarState.status"
    top
  >
    {{ snackBarState.text }}
  </v-snackbar>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["snackBarState"])
  },
}
</script>