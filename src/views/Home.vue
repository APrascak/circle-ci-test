<template>
  <div class="home">
    <span class="bg"></span>
    <v-row>
      <v-col
        md="4"
        offset-md="4"
        class="mt-14"
      >
        <v-card
          shaped
          elevation="2"
        >
          <v-card-title align="center"><span align="center">{{ message }}</span></v-card-title>
          <v-card-text align="center">Welcome the Association of Sales Engineers at the University of Florida! We were founded in 2020 with the goal to expand the field of Sales Engineering and the resources to the UF Student Body.
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      message: 'UF Association of Sales Engineers',
    }
  },
};
</script>

<style scoped>
.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
    background: url( 'https://www.greatvaluecolleges.net/wp-content/uploads/2015/05/957441704_1338dc75f6_b-1024x758.jpg') no-repeat center center;
    background-size: cover;
    transform: scale(1.1);
  }
</style>