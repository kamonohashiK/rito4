<template>
  <v-list dense nav>
    <v-list-item-content>
      <v-list-item-title>この島の時刻表データはまだありません。</v-list-item-title>
    </v-list-item-content>
    <v-list-item>
      <v-list-item-content>
        <v-btn color="green lighten-1" @click="sendRequest">時刻表をリクエスト</v-btn>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  methods: {
    sendRequest(){
      this.$store.dispatch('sendRequest')
    }
  }
}
</script>