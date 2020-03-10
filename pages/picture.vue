<template>
  <v-layout column>
	<h2>
		{{mapState.focusedIsland}}の写真
		<v-btn color="primary">投稿する</v-btn>
	</h2>
    <v-card v-for="d in data" :key="d" flat>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="200"
              width="300"
              :src="d.path"
            ></v-img>
          </v-col>

          <v-col>
            <v-card-text>
              <div class="text--primary">
                {{d.caption}}
              </div>
            </v-card-text>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-icon>mdi-account</v-icon>{{d.postedBy}} {{d.postedAt}}
        </v-card-actions>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      data: [
		  {
			  path: "https://shimajikoku.com/image.png",
			  caption: "テキストテキストテキストテキスト\nテキストテキストテキストテキストテキストテキストテキストテキスト\nテキストテキストテキストテキストテキストテキストテキスト",
			  postedBy: "かも屋",
			  postedAt: "2020/02/02"
		  }
	  ]
    };
  },
  computed: {
    ...mapState(["mode", "mapState"])
  }
};
</script>

<style>
  h2 {
    color: gray;
  }

  .v-btn {
	  margin: 5px;
  }
</style>