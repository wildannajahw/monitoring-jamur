<template>
    <div class="container">
        <div class="row mt-5">
        <div class="col">
        
        </div>
        </div>
        <div class="row mt-5" v-if="arrTemperature.length > 0">
            <div class="col">
                <h2 class="text-center">Temperature</h2>
                <line-chart
                :chartData="arrTemperature"
                :options="chartOptions"
                :chartColors="temperatureChartColors"
                label="Temperature"
                />
            </div>
        </div>
        <div class="row mt-5" v-if="arrHumidity.length > 0">
            <div class="col">
                <h2 class="text-center">Humidity</h2>
                <line-chart
                :chartData="arrHumidity"
                :options="chartOptions"
                :chartColors="humidityChartColors"
                label="Humidity"
                />
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import moment from "moment";
import LineChart from "./LineChart";

export default {
  name:'Home',
  components: {
    LineChart,
  },
  data() {
    return {
      arrTemperature: [],
      temperatureChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F"
      },
      arrHumidity: [],
      humidityChartColors: {
        borderColor: "#251F47",
        pointBorderColor: "#260F26",
        pointBackgroundColor: "#858EAB",
        backgroundColor: "#858EAB"
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    };
  },
  async created() {
    const { data } = await axios.get('https://api-jamur-monitoring.herokuapp.com/api/v1/monitoring/');
    data.forEach(d => {
      const date = moment(date).format('DD/MM h:mm');

      const {
        temperature,
        humidity
      } = d;
      this.arrTemperature.push({ date, total: temperature,});
      this.arrHumidity.push({ date, total: humidity,});
    });
  },
  methods:{
    moment:function(date){
      return moment(date).format('DD MMMM  YYYY h:mm');
    },
  }
};
</script>
