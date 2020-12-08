<template>
  <v-container>
    <h1>Job Board</h1>
      <v-data-table
        :headers="headers"
        :items="jobs.jobs"
        :items-per-page="10"
        class="elevation-1 mt-2"
      ></v-data-table>
  </v-container>
</template>

<script>
import db from "../firebase/init";

export default {
  name: "Jobs",
  data() {
    return {
        headers: [
            { text: 'Position', value: 'job_title' },
            { text: 'Company', value: 'company' },
            { text: 'Location', value: 'job_location' },
            { text: 'Salary', value: 'job_salary' },
            { text: 'Summary', value: 'job_summary' },
        ],
        jobs: null,
    }
  },
  created() {
    let ref = db.collection('jobs');
    ref.get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data());
            this.jobs = doc.data()
            console.log("jobs", this.jobs);
            console.log(this.jobs.jobs);
        })
    })
  }
};
</script>
