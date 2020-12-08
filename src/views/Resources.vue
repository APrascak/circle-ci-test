<template>
  <div class="resources">
    <span class="bg"></span>
    <v-row>
      <v-col>
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">UF Resources</span></v-card-title>
          <v-card-text align="center" class="welcome"><a href="https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/SAE_UMN/">UF Sales Engineering Minor</a></v-card-text>
          <p><img class="uf-logo" :src="require('../../static/uf.png')" width=200/><br /></p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">FAQs</span></v-card-title>
          <v-card-text align="left" class="welcome">
            Q: What is Sales Engineering?<br />
            <br />A: Sales engineering is a hybrid of sales and engineering that exists in industrial and commercial markets. Buying decisions in these markets are made differently than those in many consumer contexts, being based more on technical information and rational analysis and less on style, fashion, or impulse<br /><br /><br />
            Q: What does a Sales Engineer do?<br /><br />
            A: Some responsibilities include:
            <ul>
                <li>Prepare and deliver technical presentations that explain products or services to customers and prospective customers</li>
                <li>Confer with customers and engineers to assess equipment needs and to determine system requirements</li>
                <li>Collaborate with sales teams to understand customer requirements and provide sales support</li>
                <li>Secure and renew orders and arrange delivery</li>
                <li>Plan and modify products to meet customer needs</li>
                <li>Help clients solve problems with installed equipment</li>
                <li>Recommend improved materials or machinery to customers, showing how changes will lower costs or increase production</li>
                <li>Help in researching and developing new products</li>
            </ul><br /><br />
            Q: What is the average Sales Engineer salary?<br /><br />
            A: ~$114,000 based on Indeed.com listings
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
      officers: "Executive Board",
    }
  },
};
</script>

<style scoped>
.uf-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.spons {
  display: block;
  border-radius: 50%;
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