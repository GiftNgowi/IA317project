<template>
  <v-app>
    <v-app-bar absolute> </v-app-bar>
    <NavDrawer />
    <v-container>
      <v-row align="center" justify="right" class="mt-15">
        <v-col>
          <p class="text-h6 justify-center">Change Password</p>
          <v-divider></v-divider>
          <v-container>
            <v-form>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="password1"
                    label="Current Password"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Password:"
                    v-model="password"
                    :rules="passwordRules"
                    type="password"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Confirm Password:"
                    v-model="confirmPassword"
                    :rules="[confirmPasswordRules, passwordConfirmationRule]"
                    type="password"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn
                class="mt-5"
                type="submit"
                elevation="20"
                color="primary"
                width="200"
                height="40"
              >
                Change Password
              </v-btn>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <FooterView />
  </v-app>
</template>
<script>
import NavDrawer from "../views/NavDrawer.vue";
import FooterView from "./FooterView.vue";
export default {
  name: "PasswordAdmin",
  components: {
    NavDrawer,
    FooterView,
  },
  data: () => ({
    password: "",
    confirmPassword: "",
    passwordRules: [(v) => !!v || "Password is required"],
    confirmPasswordRules: [(v) => !!v || "Password is required"],
  }),
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
};
</script>
