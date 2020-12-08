<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click="navigate('userportal')" v-if="user">
          <v-list-item-action>
            <v-icon>{{ icons.mdiDesktopMacDashboard }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>User Portal</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigate('about')">
          <v-list-item-action>
            <v-icon>{{ icons.mdiAccountGroup }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigate('events')">
          <v-list-item-action>
            <v-icon>{{ icons.mdiCalendarMultiple }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Events</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigate('jobs')">
          <v-list-item-action>
            <v-icon>{{ icons.mdiAccountTie }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Job Board</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="user" @click="logout()">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="openForm()" v-if="!user">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign In / Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-dialog
      v-model="dialog"
      max-width="500px"
    >
      <v-card>
          <v-card-title>
            <span class="headline">Sign In</span>
          </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-if="feedback">
              <span class="red--text">{{ feedback }}</span>
            </v-row>
            <v-row>
                <v-text-field label="Email" v-model="email"></v-text-field>
            </v-row>
            <v-row>
                <v-text-field label="Password" v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn
                depressed
                color="green accent-4 white--text"
                @click="login()"
              >
                Sign In
              </v-btn>
              <v-spacer></v-spacer>
            </v-row>
            <v-row class="mt-6">
              <span>Don't have an account? Create one below...</span>
            </v-row>
            <v-row v-if="confirmFeedback">
              <span class="red--text">{{ confirmFeedback }}</span>
            </v-row>
            <v-row>
                <v-text-field label="Email" v-model="newEmail"></v-text-field>
            </v-row>
            <v-row>
                <v-text-field label="Password" v-model="newPassword"
                  :append-icon="showNew ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showNew ? 'text' : 'password'"
                  @click:append="showNew = !showNew"
                ></v-text-field>
            </v-row>
            <v-row>
                <v-text-field label="Confirm Password" v-model="confirmedPassword"
                  :append-icon="showConfirmed ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showConfirmed ? 'text' : 'password'"
                  @click:append="showConfirmed = !showConfirmed"
                ></v-text-field>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn
                depressed
                color="green accent-4 white--text"
                @click="signup()"
              >
                Create Account
              </v-btn>
              <v-spacer></v-spacer>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>

    </v-dialog>
    <v-app-bar
      app
      color="blue-grey darken-1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title @click="navigate('home')">UF ASE</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mdiAccountGroup } from '@mdi/js';
import { mdiCalendarMultiple } from '@mdi/js';
import { mdiAccountTie } from '@mdi/js';
import { mdiDesktopMacDashboard } from '@mdi/js';
import firebase from 'firebase';
import db from '@/firebase/init';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    icons: {
      mdiAccountGroup,
      mdiCalendarMultiple,
      mdiAccountTie,
      mdiDesktopMacDashboard,
    },
    drawer: false,
    dialog: false,
    user: null,
    email: null,
    password: null,
    newEmail: null,
    newPassword: null,
    confirmedPassword: null,
    feedback: null,
    confirmFeedback: null,
    showPassword: false,
    showNew: false,
    showConfirmed: false,
  }),
  methods: {
    navigate(page) {
      if (page == 'about') {
        this.$router.push({ name: 'About' });
      } else if (page =='events') {
        this.$router.push({ name: 'Events' });
      } else if (page =='jobs') {
        this.$router.push({ name: 'Jobs' });
      } else if (page =='home') {
        this.$router.push({ name: 'Home' });
      } else if (page =='userportal') {
        this.$router.push({ name: 'UserPortal' });
      }
    },
    openForm() {
      this.dialog = true;
    },
    signup() {
      if (!this.newEmail) {
        this.feedback = 'Please enter an email address.';
        return;
      } else if (!this.newPassword || !this.confirmedPassword) {
        this.feedback = 'Please enter and confirmed a password';
        return;
      } else if (this.newPassword !== this.confirmedPassword) {
        this.feedback = 'The entered passwords do not match';
        return;
      } else {
        let ref = db.collection('users').doc(this.newEmail);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = 'This email is already in use';
            return;
          } else {
            firebase.auth().createUserWithEmailAndPassword(
              this.newEmail, this.newPassword
            ).then(cred => {
              ref.set({
                email: this.newEmail,
                user_id: cred.user.uid,
                position: 'None',
                admin: false,
              });
            }).then(() => {
              this.dialog = false;
              this.$router.push({ name: 'Home' });
            }).catch(err => {
              this.confirmFeedback = err.message;
            });
          }
        });
      }
    },
    login() {
      if (this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = null;
          this.password = null;
          this.dialog = false;
          this.$router.push({ name: 'Home' });
          this.feedback = null;
        })
        .catch(err => {
          this.feedback = err.message;
        })
      } else {
        this.feedback = 'Please enter both a username and password.';
      }
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Home' });
        this.drawer = false;
      });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    })
  }
};
</script>
