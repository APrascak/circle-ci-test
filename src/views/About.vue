<template>
  <div class="about">
    <span class="bg"></span>
    <v-row>
      <v-col md="4" offset-md="4" class="mt-14">
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">Mission</span></v-card-title>
          <v-card-text align="center" class="welcome">A professional society to improve awareness of the Sales Engineer field and to help those interested in careers involving technical sales.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" offset-md="4" class="mt-14">
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">Vision</span></v-card-title>
          <v-card-text align="center" class="welcome">Developing a student's technical sales ability, public speaking, negotiation, and other soft skills. Promote the field of Sales Engineering to those who might know what its purpose is or that it exists. Offer workshops and guest speakers on the valuable skills they've learned through technical sales and how it's played a role in their career. Connect with local companies that are looking for these kinds of positions and find potential internships and job openings for members.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
        <v-row>
      <v-col md="4" offset-md="4" class="mt-14">
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">{{ officers }}</span></v-card-title>
            <p>
            <img class="spons" :src="require('../../static/philip.jpg')" width=200/>
            <center>President - <a href="https://www.linkedin.com/in/philip-laussermair/">Philip Laussermair</a></center>
            <img class="spons" :src="require('../../static/michael.png')" width=200/>
            <center>Vice-President - <a href="https://www.linkedin.com/in/michaelnunn3/">Michael Nunn</a></center>
            <img class="spons" :src="require('../../static/chad.jpg')" width=200/>
            <center>Treasurer - <a href="https://www.linkedin.com/in/chadathomas5/">Chad Thomas</a></center>
            <img class="spons" :src="require('../../static/jacob.jpg')" width=200/>
            <center>Secretary - <a href="https://www.linkedin.com/in/jacob-olsen-b29340160/">Jacob Olsen</a></center>
            <img class="spons" :src="require('../../static/alexander.jpg')" width=200/>
            <center>Technology - <a href="https://www.linkedin.com/in/aprascak/">Alexander Prascak</a></center>
            <br />
            <center>Click our names to connect on LinkedIn!</center>
            <br />
            </p>
        </v-card>
      </v-col>
    </v-row>  
    <v-row>
      <v-col md="4" offset-md="4" class="mt-14">
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">History/Alumni</span></v-card-title>
          <v-card-text align="center" class="welcome">This organization was founded in the Fall of 2020. </v-card-text>
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
      officers: "Executive Board",
    }
  },
};
</script>

<style scoped>
.spons {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 50%;
  padding: 15px;
}

.spons center{
  display: block;
  margin-left: 50%;
}

.welcome {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  background: url("../../static/squares.jpg") no-repeat center center;
  background-size: cover;
  transform: scale(1.1);
}
</style>