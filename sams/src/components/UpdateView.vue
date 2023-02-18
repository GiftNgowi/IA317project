<template>
  <v-app>
    <v-app-bar absolute> </v-app-bar>
    <NavDrawer />

    <v-container class="fill-height" fluid>
     
    </v-container>
   
    <FooterView />
  </v-app>
</template>
<script>
import NavDrawer from "../views/NavDrawer.vue";
import FooterView from "../components/FooterView.vue";
export default {
  name: "UpdateView",
  components: {
    NavDrawer,
    FooterView,
  },
};
</script>
<style>

</style>
