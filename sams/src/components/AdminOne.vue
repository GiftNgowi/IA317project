<template>
  <v-app>
    <v-app-bar absolute> </v-app-bar>
    <NavDrawer />

    <v-container class="fill-height mt-180px" fluid>
      <v-row class="mb-5">
        <v-col cols="4">
          <v-card color="#f5f5f5">
            <v-card-title class="text-h6"> Total Registrations </v-card-title>
            <v-card-actions>403</v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card color="#f5f5f5">
            <v-card-title class="text-h6"> Total Accepted Applicants </v-card-title>
            <v-card-actions> 295 </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card color="#f5f5f5">
            <v-card-title class="text-h6">
              Total Non-Accepted Applicants
            </v-card-title>
            <v-card-actions> 108 </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-footer color="#f5f5f5" height="60px">
            <v-row justify="center" no-gutters>
               <p class="text-center mt-2 mb-0">
          <v-icon>mdi-copyright</v-icon> Copyright UDOM-Student Admission System. All Rights
          Reserved {{ new Date().getFullYear() }}
        </p>
            </v-row>
        </v-footer> -->
    <FooterView />
  </v-app>
</template>
<script>
import NavDrawer from "../views/NavDrawer.vue";
import FooterView from "../components/FooterView.vue";
export default {
  name: "AdminOne",
  components: {
    NavDrawer,
    FooterView,
  },
};
</script>
<style scoped>
.fill-height {
  margin-top: -200px;
}
</style>
