<template>
  <v-dialog v-model="priceDialog" persistent max-width="480">
    <v-card>
      <v-card-text>
        <v-tabs centered grow v-model="tabmodel" style="margin-bottom:40px;">
          <v-tab href="#tab-1">
            <v-icon>mdi-account</v-icon>
            <span style="margin:5px;">{{peopleSum}}</span>
          </v-tab>

          <v-tab href="#tab-2" v-if="priceTable.bike_fee">
            <v-icon>mdi-bicycle</v-icon>
            <span style="margin:5px;">{{bikeSum}}</span>
          </v-tab>

          <v-tab href="#tab-3" v-if="priceTable.moto_table">
            <v-icon>mdi-motorbike</v-icon>
            <span style="margin:5px;">{{motoSum}}</span>
          </v-tab>

          <v-tab href="#tab-4" v-if="priceTable.car_table">
            <v-icon>mdi-car-hatchback</v-icon>
            <span style="margin:5px;">{{carSum}}</span>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabmodel">
          <v-tab-item v-for="i in 4" :key="i" :value="'tab-' + i">
            <v-form v-if="i == 1">
              <v-flex xs12>
                <v-text-field
                  v-model="calcNumbers.adults"
                  prepend-icon="mdi-minus-circle"
                  append-outer-icon="mdi-plus-circle"
                  @click:prepend="decrement('adults', calcNumbers.adults)"
                  @click:append-outer="increment('adults', calcNumbers.adults)"
                  label="大人"
                  type="number"
                  style="width: 80%; margin:0 auto;"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="mdi-minus-circle"
                  append-outer-icon="mdi-plus-circle"
                  @click:prepend="decrement('children', calcNumbers.children)"
                  @click:append-outer="increment('children', calcNumbers.children)"
                  label="子供"
                  type="number"
                  v-model="calcNumbers.children"
                  style="width: 80%; margin:0 auto;"
                ></v-text-field>
              </v-flex>
            </v-form>

              <v-form v-if="i == 2">
                <v-flex xs12>
                  <v-text-field
                    prepend-icon="mdi-minus-circle"
                    append-outer-icon="mdi-plus-circle"
                    @click:prepend="decrement('bikes', calcNumbers.bikes)"
                    @click:append-outer="increment('bikes', calcNumbers.bikes)"
                    label="自転車"
                    type="number"
                    v-model="calcNumbers.bikes"
                    style="width: 80%; margin:0 auto;"
                  ></v-text-field>
                </v-flex>
              </v-form>

              <v-form v-if="i == 3">
                <v-flex xs12>
                  <v-select
                    v-model="calcNumbers.moto_size"
                    :items="priceTable.moto_table"
                    item-text="label"
                    item-value="data"
                    label="排気量を選択"
                    style="width: 80%; margin:0 auto;"
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon="mdi-minus-circle"
                    append-outer-icon="mdi-plus-circle"
                    @click:prepend="decrement('motos', calcNumbers.motos)"
                    @click:append-outer="increment('motos', calcNumbers.motos)"
                    label="バイク"
                    type="number"
                    v-model="calcNumbers.motos"
                    style="width: 80%; margin:0 auto;"
                  ></v-text-field>
                </v-flex>
              </v-form>

              <v-form v-if="i == 4">
                <v-flex xs12>
                  <v-select
                    v-model="calcNumbers.car_size"
                    :items="priceTable.car_table"
                    item-text="label"
                    item-value="data"
                    label="車両を選択"
                    style="width: 80%; margin:0 auto;"
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon="mdi-minus-circle"
                    append-outer-icon="mdi-plus-circle"
                    @click:prepend="decrement('cars', calcNumbers.cars)"
                    @click:append-outer="increment('cars', calcNumbers.cars)"
                    label="自動車"
                    type="number"
                    v-model="calcNumbers.cars"
                    style="width: 80%; margin:0 auto;"
                  ></v-text-field>
                </v-flex>
              </v-form>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>

        <v-divider></v-divider>
        <v-flex xs12 style="text-align:center; font-size:16px; margin:5px;">合計 <b>{{ sum.toLocaleString() }}</b> 円</v-flex>
        <v-flex xs12 style="text-align:center;">※実際の運行状況・各種割引については、<br><a :href="priceTable.url" target="_blank" rel="noopener noreferrer">運行会社のサイト</a>をご確認ください。</v-flex>

        <v-card-actions>
          <v-spacer></v-spacer>
          <a :href="calendarUrl" target="_blank">
            <v-btn color="primary darken-1" flat>
              <v-icon>mdi-calendar</v-icon> Googleカレンダーに登録
            </v-btn>
          </a>
        </v-card-actions>
        <!-- 飛行機・ホテルはちょっと保留
        <v-card-actions>
          <v-spacer></v-spacer>
          <a href="#" target="_blank">
            <v-btn color="primary darken-1" flat>
              <v-icon>mdi-airplane</v-icon> 飛行機を探す
            </v-btn>
          </a>
          <a href="#" target="_blank">
            <v-btn color="primary darken-1" flat>
              <v-icon>mdi-hotel</v-icon> ホテルを探す
            </v-btn>
          </a>
        </v-card-actions>
        -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="gray darken-1" text @click="resetCalc(calcNumbers)">
            リセット
          </v-btn>
          <v-btn color="gray darken-1" text @click="close">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      //tab用のモデル
      tabmodel: null,

      calcNumbers: {
        adults: 0,
        children: 0,
        bikes: 0,
        motos: 0,
        moto_size: '',
        cars: 0,
        car_size: '',
      },

      sum: 0,
    }
  },
  computed: {
    priceDialog() {
      return this.$store.state.priceDialog
    },
    priceTable() {
      return this.$store.state.priceTable
    },
    peopleSum() {
      var sum = Number(this.calcNumbers.adults) + Number(this.calcNumbers.children)
      return sum > 0 ? sum : null
    },
    //このへんリファクタリングできそう
    bikeSum() {
      var sum = Number(this.calcNumbers.bikes)
      return sum > 0 ? sum : null
    },
    motoSum() {
      var sum = Number(this.calcNumbers.motos)
      return sum > 0 ? sum : null
    },
    carSum() {
      var sum = Number(this.calcNumbers.cars)
      return sum > 0 ? sum : null
    },
    calendarUrl: function(){
      var url = 'https://www.google.com/calendar/event?action=TEMPLATE&text='
        + this.$store.state.route.departure + 'から'
        + this.$store.state.route.arrival + 'へ移動'
        + '&location=' + this.$store.state.route.departure
        + '&details=' + this.priceTable.url + " " + this.sum.toLocaleString() + '円'
        + '&dates=' + this.dateToString() + 'T'
        + this.stripString(this.$store.state.departureTime)
        + '/' + this.dateToString() + 'T'
        + this.stripString(this.$store.state.arrivalTime)
      return url
    },
  },
  methods: {
    close() {
      this.$store.commit('changePriceDialogFlag', false)
      this.resetCalc(this.calcNumbers)
    },
    resetCalc(obj) {
      Object.keys(obj).forEach(function(key){
        obj[key] = 0
      })
      this.calcNumbers.moto_size = ''
      this.calcNumbers.car_size = ''
      this.tabmodel = null
    },
    increment(str, n) {
      switch(str) {
        case 'adults':
          this.calcNumbers.adults++
          break;
        case 'children':
          this.calcNumbers.children++
          break;
        case 'bikes':
          this.calcNumbers.bikes++
          break;
        case 'motos':
          this.calcNumbers.motos++
          break;
        case 'cars':
          this.calcNumbers.cars++
          break;
        default:
          break;
      }
    },
    decrement(str, n) {
      if(n > 0) {
        switch(str) {
          case 'adults':
            this.calcNumbers.adults--
            break;
          case 'children':
            this.calcNumbers.children--
            break;
          case 'bikes':
            this.calcNumbers.bikes--
            break;
          case 'motos':
            this.calcNumbers.motos--
            break;
          case 'cars':
            this.calcNumbers.cars--
            break;
          default:
            break;
        }
      }
    },
    dateToString(){
      var today = new Date()
      var y = today.getFullYear()
      var m = ("00" + (today.getMonth()+1)).slice(-2);
      var d = ("00" + today.getDate()).slice(-2);
      var result = y + m + d
      return result
    },
    stripString(str){
      return str.replace(/[^\d{2}:\d{2}]/g, '').replace(':', '') + '00'
    }
  },
  watch: {
    calcNumbers: {
      handler: function(val){
        this.sum =
          val.adults * this.$store.state.priceTable.adult_fee +
          val.children * this.$store.state.priceTable.child_fee +
          val.bikes * this.$store.state.priceTable.bike_fee +
          val.motos * this.calcNumbers.moto_size +
          val.cars * this.calcNumbers.car_size
      },
      deep: true
    },
  }
}
</script>

<style>
  a {
    text-decoration: none;
  }
</style>