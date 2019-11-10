<template>
  <v-list dense nav>
    <v-list-item-content>
      <v-list-item-subtitle>{{mapState.focusedIsland}}へ行く港</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item v-for="item in navState.toPorts" :key="item.title" link>
      <v-list-item-icon>
        <v-icon>mdi-ferry</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title style="font-size:16px;">{{ item.name }} ({{item.locale}})</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["mapState", "navState"])
  }
}
</script>