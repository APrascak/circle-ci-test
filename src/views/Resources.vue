<template>
  <div class="resources">
    <span class="bg"></span>
    <v-row>
      <v-col md="4" offset-md="4" class="mt-14">
        <v-card elevation="2">
          <v-card-title align="center"><span align="center">UF Resources</span></v-card-title>
          <v-card-text align="center" class="welcome"><a href="https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/SAE_UMN/">UF Sales Engineering Minor</a></v-card-text>
          <p><img class="uf-logo" :src="require('../../static/uf.png')" width=200/><br /></p>
        </v-card>
      </v-col>
    </v-row>
    <v-row >
      <v-spacer></v-spacer>
      <v-col>
          <VueFaqAccordion :items="myItems"/>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>    
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'

// @ is an alias to /src
export default {
  name: "Resources",
  components: {
    VueFaqAccordion
  },
  data () {
    return {
      myItems: [
          {
            title: 'Q: What is Sales Engineering?',
            value: 'A: Sales engineering is a hybrid of sales and engineering that exists in industrial and commercial markets. Buying decisions in these markets are made differently than those in many consumer contexts, being based more on technical information and rational analysis and less on style, fashion, or impulse',
            category: 'FAQs'
          },
          {
            title: 'Q: What does a Sales Engineer do?',
            value: 'A: Some responsibilities include: <br />- Prepare and deliver technical presentations that explain products or services to customers and prospective customers <br />- Confer with customers and engineers to assess equipment needs and to determine system requirements <br />- Collaborate with sales teams to understand customer requirements and provide sales support <br />- Secure and renew orders and arrange delivery <br />- Plan and modify products to meet customer needs <br />- Help clients solve problems with installed equipment <br />Recommend improved materials or machinery to customers, showing how changes will lower costs or increase production <br />- Help in researching and developing new products',
            category: 'FAQs'
          },
          {
            title: 'Q: What is the average Sales Engineer salary?',
            value: 'A: ~$114,000 based on Indeed.com listings',
            category: 'FAQs'
          }
        ]
    }
  },
};
</script>

<style scoped>
.faq {
  border-radius: 5px;
}

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