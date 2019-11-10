<template>
  <v-navigation-drawer app permanent dark width="320" color="light-blue darken-1">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title" v-if="mode == 'default'">しまの時刻表へようこそ！</v-list-item-title>
        <v-list-item-subtitle v-if="mode == 'default'">時刻表を調べたい島を選択してください。</v-list-item-subtitle>
        <v-img class="white--text" height="230" style="width:100%" :src="navState.imageUrl" v-if="mode != 'default'">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{mapState.focusedIsland}}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-layout xs12 row justify-center>
      <v-btn text disabled>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn text disabled>
        <v-icon>mdi-clock</v-icon>
      </v-btn>

      <v-btn text disabled>
        <v-icon>mdi-panorama</v-icon>
      </v-btn>
    </v-layout>

    <v-divider></v-divider>

    <v-list v-if="mode != 'default' && !navState.timetable" dense nav>
      <v-list-item-content>
        <v-list-item-title>この島の時刻表データはまだありません。</v-list-item-title>
      </v-list-item-content>
      <v-list-item>
        <v-list-item-content>
          <v-btn color="success">時刻表をリクエスト</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list v-if="mode != 'default' && navState.timetable" dense nav>
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

    <v-list v-if="mode != 'default' && navState.timetable" dense nav>
      <v-list-item-content>
        <v-list-item-subtitle>{{mapState.focusedIsland}}の港</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item v-for="item in navState.fromPorts" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>mdi-ferry</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="font-size:16px;">{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      position: {
        lat: 33.975178,
        lng: 132.619553
      },
    };
  },
  computed: {
    ...mapState(["mode", "mapState", "navState"])
  }
  /*
    画像データ拾うためにはとりあえず島のデータ自体は必要なのか→じゃあ作る、
    あと島に注目したら港のマーカーはやっぱりつけたいなあ→とりあえず後回しでいいか
    まずは時刻表をちゃんと検索できるようになるまで持っていこう
   */
};
</script>