<template>
  <v-app>
    <v-app-bar absolute></v-app-bar>

    <NavDrawer />
    <v-container class="fill-height" fluid>
      <div>
        <v-row class="mt-15">
          <v-col cols="12">
            <v-textarea
              class="textarea"
              outlined
              label="A message to selected students"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-btn @click="sendMessage()" class="mb-2">Send Message</v-btn>
        <v-row>
          <v-col cols="12">
            <v-textarea
              class="textarea"
              outlined
              label="A message to non-selected students"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-btn @click="sendMessageTwo()">Send Message</v-btn>

        <div>
          <tbody>
            <tr v-for="student in students" :key="student.name">
              {{student.name}}:
              <span v-if="student.receivedMessage">
                {{student.receivedMessage}}</span>
            </tr>
          </tbody>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import NavDrawer from "../views/NavDrawer.vue";
import { getSignerContract } from "../interfaces/global.interface";

export default {
  name: "messageView",
  components: {
    NavDrawer,
    // FooterView,
  },

  data() {
    return {
      message: "",
    };
  },
  methods: {
   
     async sendMessage() {
      if (window.ethereum) {
        const contract = (await getSignerContract()).contract;
        const result = await contract.sendAcceptedMessages();
        if (result) {
          this.path = "StudentStatus";
        } else {
          alert("not authorised");
        }
      } else {
        console.error("Ethereum provider not available in the browser.");
      }
    },
    sendMessageTwo() {
      this.students.forEach((student) => {
        if (!student.selected) {
          student.receivedMessage = this.message;
        }
      });
    },
  },
};
</script>
<style scoped>
.textarea {
  width: 500px;
}
</style>
