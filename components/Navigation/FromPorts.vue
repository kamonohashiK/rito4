<template>
  <v-list dense nav>
      <v-list-item-content>
        <v-list-item-subtitle>{{mapState.focusedIsland}}の港</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item v-for="(item, index) in navState.fromPorts" :key="item.index" link @click="selectDeparture(index)">
        <v-list-item-icon>
          <v-icon>mdi-anchor</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="font-size:16px;">{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["mapState", "navState"])
  },
  methods: {
    selectDeparture(idx) {
      this.$store.dispatch('selectDeparture', {index: idx, fromOrTo: 'from'})
    }
  }
}
</script>