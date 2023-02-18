<template>
  <v-app>
    <v-app-bar absolute> </v-app-bar>
    <NavDrawer />

    <v-container class="fill-height" fluid>
      <!-- <div>
      <button @click="filterSelected()">Filter Selected</button>
    </div> -->
      <!-- <div class="card">
        <v-card class="mt-5">
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-for="student in filteredStudents"
            :key="student.name"
            :headers="headers"
            :items="students"
            :search="search"
            :items-per-page="9"
          >{{student.name}}</v-data-table>
        </v-card>
      </div> -->
      <!-- <div class="card">
        <v-card class="mt-15">
       <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Student Name
          </th>
          <th class="text-left">
            Gender
          </th>
           <th class="text-left">
            Education Level
          </th>
          <th class="text-left">
            Mobile Number
          </th>
           <th class="text-left">
            Status
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in students"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.gender }}</td>
            <td>{{ item.level }}</td>
          <td>{{ item.number }}</td>
            <td>{{ item.status }}</td>
          <td>{{ item.action }}</td>
        </tr>
      </tbody>
    
    </template>
  </v-simple-table>
        </v-card>
      </div> -->

      <div class="card">
        <v-card class="mt-15">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Student Name</th>
                  <th class="text-left">Gender</th>
                  <th class="text-left">Education Level</th>
                  <th class="text-left">Mobile Number</th>
                  <th class="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in filteredStudents" :key="student.name">
                  <td>{{ student.name }}</td>
                  <td>{{ student.gender }}</td>
                  <td>{{ student.level }}</td>
                  <td>{{ student.number }}</td>
                  <td>{{ student.status }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <v-btn @click="toggleFilter()" class="mt-2">{{ filterButtonText }}</v-btn>
      </div>
    </v-container>

    <!-- <FooterView /> -->
  </v-app>
</template>
<script>
import NavDrawer from "../views/NavDrawer.vue";
//import FooterView from "../components/FooterView.vue";
export default {
  name: "SelectionsView",
  components: {
    NavDrawer,
    // FooterView,
  },
  data() {
    return {
      // page: 1,
      // search: "",
      // headers: [
      //   {
      //     text: "Student Name", //The text "Student Name" is the title of the first column in the table.
      //     align: "start", // means the text in this column will be aligned to the start (left) of the column
      //     value: "name", //refers to the data field that this column represents
      //   },
      //   { text: "Gender", value: "gender" },
      //   { text: "Education Level", value: "level" },
      //   { text: "Mobile Number", value: "number", filterable: false }, //means this column cannot be filtered, true by default
      //   { text: "Status", value: "status" },
      //   { text: "Action", value: "action" },
      // ],

      students: [
        {
          name: "Lulu Amani",
          gender: "F",
          level: "Form Six",
          number: "0752686020",
          status: "Accepted",
          selected: true,
          // action: 4.0,
        },
        {
          name: "Gift Noel",
          gender: "F",
          level: "Form Six",
          number: "0754751069",
          status: "Accepted",
          selected: true,
          // action: 4.0,
        },
        {
          name: "Kelvin Kelvin",
          gender: "M",
          level: "Diploma",
          number: "0752686020",
          status: "Denied",
          selected: false,
          // action: 4.0,
        },
        {
          name: "Mpotisambo Peter",
          gender: "M",
          level: "Diploma",
          number: "0755700500",
          status: "Accepted",
          selected: true,
          // action: 4.0,
        },
        {
          name: "Sheila Sheila",
          gender: "F",
          level: "Diploma",
          number: "0752686020",
          status: "Denied",
          selected: false,
          // action: 4.0,
        },
        {
          name: "Frank Juma",
          gender: "M",
          level: "Form Six",
          number: "0712686020",
          status: "Accepted",
          selected: true,
          // action: 4.0,
        },
        {
          name: "Fendi Fendi",
          gender: "F",
          level: "Diploma",
          number: "0752686020",
          status: "Denied",
          selected: false,
          // action: 4.0,
        },
        {
          name: "Elisante Enea",
          gender: "M",
          level: "Diploma",
          number: "0742686020",
          status: "Accepted",
          selected: true,
          // action: 4.0,
        },
        {
          name: "Mathew Ngomano",
          gender: "M",
          level: "Form Six",
          number: "0732746020",
          status: "Accepted",
          selected: true,
          // action: 4.0,
        },
        {
          name: "Prince Victor",
          gender: "M",
          level: "Form Six",
          number: "0732746020",
          status: "Accepted",
          selected: true,
          // action: 4.0,
        },
        {
          name: "Shalom Ngowi",
          gender: "F",
          level: "Form Six",
          number: "0732746020",
          status: "Accepted",
          selected: true,
          // action: 4.0,
        },
        {
          name: "Laura Amani",
          gender: "F",
          level: "Form Six",
          number: "0732746020",
          status: "Accepted",
          selected: true,
          // action: 4.0,
        },
      ],
      showSelectedOnly: false,
    };
  },
  // computed: {
  //   filteredStudents() {
  //     return this.students.filter((student) => student.selected);
  //   },
  // },
  computed: {
    filteredStudents() {
      if (this.showSelectedOnly) {
        return this.students.filter((student) => student.selected);
      }
      return this.students;
    },
    filterButtonText() {
      return this.showSelectedOnly ? "Show All" : "Show Selected Only";
    },
  },
  // methods: {
  //   filterSelected() {
  //     this.filteredStudents = this.students.filter((student) => student.selected);
  //   },
  // },
  methods: {
    toggleFilter() {
      this.showSelectedOnly = !this.showSelectedOnly;
    },
  },
};
</script>
<style scoped>
.card {
  width: 100%;
  height: 100%;
}
.page {
  background-color: #f5f5f5;
  height: 15px;
}
</style>
