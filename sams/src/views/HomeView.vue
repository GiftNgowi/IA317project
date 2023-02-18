<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="10" sm="5" md="5">
        <v-card class="cardB" height="310px">
          <v-card-title class="text-h6 justify-center"
            >Student Admission Management System (SAMS)</v-card-title
          >
          <v-divider></v-divider>
          <v-row class="mb-0">
            <v-card-text class="text-h6 font-weight-light">
              <p class="pa-md-6 lg-auto">
                Welcome to the University of Dodoma! <br />
                We are delighted that you have chosen to explore our institution
                and all that we have to offer.
                <br />
                Please take a moment to register and begin your journey with us.
              </p>
            </v-card-text>
          </v-row>
          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn
                  id="connectButton"
                  rounded
                  width="200"
                  height="40"
                  color="primary"
                  dark
                  bottom
                  class="btn bg-primary"
                  elevation="20"
                  center
                  @click="retrieveRequests()"
                >
                  CONNECT
                </v-btn>
              </v-col>

              <v-col>
                <v-btn
                  :to="{ path }"
                  rounded
                  width="200"
                  height="40"
                  color="primary"
                  dark
                  bottom
                  class="btn bg-primary"
                  elevation="20"
                  center
                  @click="loginUsers()"
                >
                  LOGIN
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <router-link to="/">Forgot Password?</router-link>
              </v-col>

              <v-col cols="12" md="6">
                <router-link to="/UserAccount">Create Account</router-link>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-footer color="#f5f5f5" class="footer">
      <v-row justify="center" no-gutters>
        <p class="text-center mt-2 mb-0">
          <v-icon>mdi-copyright</v-icon> Copyright UDOM-Student Admission
          System. All Rights Reserved {{ new Date().getFullYear() }}
        </p>
      </v-row>
    </v-footer>
  </v-container>
</template>
<script>
import { getSignerContract } from "../interfaces/global.interface";

export default {
  name: "HomeView",
  data: () => ({
    step: "",
    path: "",

    props: {
      source: String,
    },
  }),

  methods: {
    async retrieveRequests() {
      //verify if the browser is running MetaMask
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        document.querySelector("#connectButton").innerHTML = "CONNECTED";
      } else {
        document.querySelector("#connectButton").innerHTML =
          "please install metamask!";
      }
    },
    async loginUsers() {
      if (window.ethereum) {
        const contract = (await getSignerContract()).contract;
        const result = await contract.loginUser();
        if (result) {
          this.path = "StudentStatus";
        } else {
          alert("not authorised");
        }
      } else {
        console.error("Ethereum provider not available in the browser.");
      }
    },
  },
};
</script>
<style scoped>
.cardB {
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.5);
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
}
</style>
