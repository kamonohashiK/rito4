<template>
  <v-list>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-alpha-s-circle</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title style="font-size:16px;">{{ route.departure }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-alpha-g-circle</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title style="font-size:16px;">{{ route.arrival }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["route"])
  }
}
</script>