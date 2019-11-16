<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title class="title" v-if="mode == 'default'"
        >しまの時刻表へようこそ！</v-list-item-title
      >
      <v-list-item-subtitle v-if="mode == 'default'"
        >時刻表を調べたい島を選択してください。</v-list-item-subtitle
      >
      <v-img
        class="white--text"
        height="230"
        style="width:100%"
        :src="navState.imageUrl"
        v-if="mode != 'default'"
      >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{ mapState.focusedIsland }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["mode", "mapState", "navState"])
  }
};
</script>
