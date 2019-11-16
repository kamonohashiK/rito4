<template>
  <v-app-bar app flat color="gray" height="80">
    <v-toolbar-title></v-toolbar-title>
    <v-autocomplete
      v-model="selected"
      label="島名で検索"
      clearable
      rounded
      filled
      :items="islandList"
      @change="selectIsland"
      style="margin-top:30px;"
    ></v-autocomplete>
  </v-app-bar>
</template>

<script>
import jsonData from "~/assets/index.json";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "しまの時刻表",
      selected: "",
      loginDropdown: [
        {
          title: "マイページ",
          to: "/users/1"
        },
        {
          title: "ログアウト",
          to: "/logout"
        }
      ],
      islandList: [],
    };
  },
  created() {
    jsonData.index_items.forEach(item => {
      this.islandList.push(item.search_key);
    });
  },
  computed: {
    ...mapState(["mapState, navState"])
  },
  methods: {
    selectIsland() {
      if (this.selected) {
        this.$store.dispatch(
          "focusIsland",
          this.islandList.indexOf(this.selected)
        );
      }
    },
  }
};
</script>
