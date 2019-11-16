<template>
  <v-app-bar app flat color="gray" height="80">
    <v-btn class="mx-2" fab dark small color="blue darken-1">
      <v-icon dark>mdi-app</v-icon>
    </v-btn>
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
    <v-spacer />
    <!-- ログイン時:ユーザーのアバターとマイページへのリンク(まだ公開しない) -->
    <!--
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="mx-2" fab dark small color="purple">
          <v-icon dark>mdi-android</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in loginDropdown" :key="index">
          <nuxt-link :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>
    -->
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
      islandList: []
    };
  },
  created() {
    jsonData.index_items.forEach(item => {
      this.islandList.push(item.search_key);
    });
  },
  computed: {
    ...mapState(["mapState"])
  },
  methods: {
    selectIsland() {
      if (this.selected) {
        this.$store.dispatch(
          "focusIsland",
          this.islandList.indexOf(this.selected)
        );
      }
    }
  }
};
</script>
