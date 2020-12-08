<template>
  <div class="home">
  <div class="banner text-center">
    <img src="../../static/home_banner.jpg" width="100%">
    <div class="text-block">
      UF Association of Sales Engineers
      <img src="../../static/ase.png" width=200/>
    </div>
  </div>
    <v-row>
      <v-col md="4" offset-md="4" class="mt-14">
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">{{ message }}</span></v-card-title>
          <v-card-text align="center" class="welcome">Welcome the Association of Sales Engineers at the University of Florida! We were founded in 2020 with the goal to expand the field of Sales Engineering and the resources to the UF Student Body.
            <br />
            <br />
            Within the organization, members are provided with many opportunities, including guest speakers, resume reviews, and workshops.
            <br />
            <br />
            We look forward to seeing you at the next event!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> 
    <v-row>
      <v-col md="4" offset-md="4" class="mt-14">
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">{{ contact }}</span></v-card-title>
          <v-card-actions class=justify-center>
            <v-btn x-large href="https://www.facebook.com/groups/ufsalesengineers">
            <v-icon x-large>mdi-facebook</v-icon>
            </v-btn>
            <v-btn x-large href="https://twitter.com/uf_ase">
              <v-icon x-large>mdi-twitter</v-icon>
            </v-btn>
            <v-btn x-large href="https://join.slack.com/t/associationof-9co5938/shared_invite/zt-jxleu7wg-wSXsMduHMK2hDUbLuf_LjQ">
              <v-icon x-large>mdi-slack</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" offset-md="4" class="mt-14">
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">{{ sponsors }}</span></v-card-title>
          <v-card-actions class=justify-center>
            <p><img class="spons" :src="require('../../static/oracle.png')" width=200/>
            <br />
            <img class="spons" :src="require('../../static/splunk.png')" width=200/></p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>    
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      message: 'UF Association of Sales Engineers',
      contact: 'Stay In Touch',
      sponsors: 'Our Sponsors and Partners',
    }
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  display: block;
  max-height: 500px;
  overflow: hidden;
}

.text-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: #0021A5;
  opacity: 99%;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 60px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.spons {
  display: block;
}

.welcome {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>