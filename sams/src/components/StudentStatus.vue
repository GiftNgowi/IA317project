<template>
  <v-app>
    <v-app-bar absolute> </v-app-bar>
    <NavDrawerTwo />

    <v-container>
      <v-card color="#f5f5f5" class="mt-15">
        <v-card-title class="text-h6">
          Welcome, {name}
        </v-card-title>
        <v-divider></v-divider>
        <v-row align="center" justify="right" class="mt-5 ml-4">
          <v-alert border="top" color="primary" dark>
            Dear Applicant, allocation of students for the academic year
            2022/2023 is ongoing.
            <br />
            You are advised to visit your SAMS account when subsequent result
            batches are released.
          </v-alert>
        </v-row>
      </v-card>
    </v-container>

    <FooterView />
  </v-app>
</template>
<script>
import NavDrawerTwo from "../views/NavDrawerTwo.vue";
import FooterView from "../components/FooterView.vue";
export default {
  name: "UpdateView",
  components: {
    NavDrawerTwo,
    FooterView,
  },
};
</script>
<style></style>
