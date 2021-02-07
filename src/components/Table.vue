<template>
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Humidity</th>
            <th>Temperature</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="info of infos" :key="info.id">
            <td data-column="First Name">{{info.id}}</td>
            <td data-column="Last Name">{{info.humidity}}</td>
            <td data-column="Job Title">{{info.temperature}}</td>
            <td data-column="Twitter">{{moment(info.date)}}</td>
            </tr>
        </tbody>
    </table>
</template>


<script>


import axios from "axios";
import moment from "moment";

export default {
  components: {
  },
  data() {
    return {
      infos:[],
    };
  },
  async created() {
    const { data } = await axios.get('https://api-jamur-monitoring.herokuapp.com/api/v1/monitoring/');
    this.infos=data;
  },
  methods:{
    moment:function(date){
      return moment(date).format('DD MMMM  YYYY h:mm');
    },
  }
};
</script>