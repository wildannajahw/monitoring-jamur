<template>
<div>
  <div class="bar">
    <input type="checkbox" id="bar-check">
    <div class="bar-header">
      <div class="bar-title">
        <a href="#/" class="title">Monitoring Jamur</a>
        
      </div>
    </div>
    <div class="bar-btn">
      <label for="bar-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div class="bar-links">
      <a href="#/">Home</a>
      <a href="#/table">Table</a>
      <a href="#/image">Image</a>
    </div>
  </div>
  <router-view></router-view>
  <br><br><br><br><br>
</div>

</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  components: {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0px;
  font-family: 'segoe ui';
}

.bar {
  height: 100%;
  width: 100%;
  background-color: #30ce10;
  position: relative;
}

.bar > .bar-header {
  display: inline;
}

.bar > .bar-header > .bar-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.bar > .bar-btn {
  display: none;
}

.bar > .bar-links {
  display: inline;
  float: right;
  font-size: 18px;
}
.title{
  color: #eee;
}
.title:hover{
  text-decoration: none;
  color: #eee;
}


.bar > .bar-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.bar > .bar-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.bar > #bar-check {
  display: none;
}
table { 
	width: 750px; 
	border-collapse: collapse; 
	margin:50px auto;
	}

/* Zebra striping */
tr:nth-of-type(odd) { 
	background: #eee; 
	}

th { 
	background: #30ce10; 
	color: white; 
	font-weight: bold; 
	}

td, th { 
	padding: 10px; 
	border: 1px solid #ccc; 
	text-align: center; 
	font-size: 18px;
	}


@media (max-width:1024px) {
  .bar > .bar-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .bar > .bar-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .bar > .bar-btn > label:hover,.bar  #bar-check:checked ~ .bar-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .bar > .bar-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .bar > .bar-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .bar > .bar-links > a {
    display: block;
    width: 100%;
  }
  .bar > #bar-check:not(:checked) ~ .bar-links {
    height: 0px;
  }
  .bar > #bar-check:checked ~ .bar-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
  
}

/* asdsa */
/* 12columns.css | Created by Katherine Kato | Released under the MIT license */
/* GitHub: https://kathykato.github.io/12columns/ */

</style>
