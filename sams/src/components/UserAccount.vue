<template>
  <v-app>
    <v-app-bar absolute> </v-app-bar>

    <v-container>
      <v-row align="center" class="mt-15">
        <v-col>
          <p class="text-h6 justify-center">Create Account</p>
          <v-divider></v-divider>
          <v-container>
            <div class="row">
              <form @submit="createAccount" class="col s12">
                <v-text-field
                  v-model="username"
                  :error-messages="errors"
                  label="Username"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="first_name"
                  :error-messages="errors"
                  label="First Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="last_name"
                  :error-messages="errors"
                  label="Last Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="Email"
                  required
                ></v-text-field>

                <v-btn type="submit" v-text="'Create Account'"></v-btn>
              </form>
              <br />
            </div>
            <router-link to="/">Go to login-page</router-link>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <FooterView />
  </v-app>
</template>
<script>
import FooterView from "./FooterView.vue";

import { getSignerContract } from "../interfaces/global.interface";

export default {
  name: "UserAccount",
  components: {
    FooterView,
  },
  data() {
    return {
      username: null,
      first_name: null,
      last_name: null,
      email: null,
      users: [],
    };
  },

  methods: {
    async createAccount(e) {
      console.log("clicked");
      e.preventDefault();
      if (window.ethereum) {
        const contract = (await getSignerContract()).contract;

        const response = await contract.createAccount(
          this.username,
          this.first_name,
          this.last_name,
          this.email
        );
        // Check if transaction is successful
        if (response.hash) {
          this.$router.push("/");
        } else {
          alert("Registration failed");
        }
      } else {
        console.error("Ethereum provider not available in the browser.");
      }
    },
  },
};
</script>
