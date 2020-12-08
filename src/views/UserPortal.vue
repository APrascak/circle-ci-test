<template>
  <div>
      <v-container>
          <v-spacer></v-spacer>
          <h1>User Portal</h1>
          <v-spacer></v-spacer>
      </v-container>
  </div>
</template>

<script>
import db from "../firebase/init";

export default {
  name: "UserPortal",
  data() {
    return {
        events: [],
    }
  },
  created() {
    let ref = db.collection('events');
    ref.get().then(snapshot => {
        snapshot.forEach(doc => {
            this.events.push(doc.data());
        })
    })
  }
};
</script>
