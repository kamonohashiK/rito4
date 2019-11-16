<template>
  <MobileUI v-if="$device.isMobile"/>
  <DeskTopUI v-else/>
</template>

<script>
import MobileUI from "@/components/MobileUI.vue";
import DeskTopUI from "@/components/DeskTopUI.vue";
import axios from 'axios'

export default {
  components: {
    MobileUI, DeskTopUI
  },
  mounted() {
    //起動時にLambdaを走らせてコールドスタート防止
    axios.get(process.env.API_ENDPOINT + 'island')
    axios.get(process.env.API_ENDPOINT + 'timetable')
    axios.get(process.env.API_ENDPOINT + 'pricetable')
  }
};
</script>
