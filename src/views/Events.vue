<template>
  <div>
      <v-container>
        <h1 align="center">Recent & Upcoming Events</h1>
        <v-row>
            <v-col
                offset-
            >

            </v-col>
        </v-row>
        <v-row
            v-for="event in events"
            :key="event.title"
        >
            <v-col
                offset-md="2"
                md="8"
            >
                <v-card
                    elevation="2"
                    outlined
                >
                    <v-card-title>
                        {{ event.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ event.date }} @ {{ event.time }} <br /> {{ event.location }}
                    </v-card-subtitle>
                    <v-card-text>
                        {{ event.description }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            depressed
                            color="green accent-4 white--text"
                        >
                            RSVP
                        </v-btn>
                        <v-btn
                            depressed
                            color="blue accent-4 white--text"
                        >
                            Zoom Link
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="red"
                        >
                            <v-icon dark>
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-fab-transition>
            <v-btn
                fab
                largedark
                bottom
                right
                color="green"
                class="white--text"
            >
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </v-fab-transition>
      </v-container>
  </div>
</template>

<script>
import db from "../firebase/init";

export default {
  name: "Events",
  data() {
    return {
        headers: [
            { text: 'Position', value: 'job_title' },
            { text: 'Company', value: 'company' },
            { text: 'Location', value: 'job_location' },
            { text: 'Salary', value: 'job_salary' },
            { text: 'Summary', value: 'job_summary' },
        ],
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
