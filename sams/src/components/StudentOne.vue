<template>
  <v-app>
    <v-app-bar absolute> </v-app-bar>
    <NavDrawerTwo />
    <v-container>
      <v-row align="center" justify="right" class="mt-15">
        <v-col>
          <p class="text-h6 justify-center">Please fill in your details</p>
          <v-divider></v-divider>
          <v-container>
            <p>1. Personal Information Entry</p>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="last"
                    :rules="nameRules"
                    label="Surname:"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="first"
                    :rules="nameRules"
                    label="First Name:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="last"
                    :rules="nameRules"
                    label="Middle Name:"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="bdate"
                    :rules="dateRules"
                    label="Birth Date:"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="place"
                    label="Place of Birth:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-file-input
                    truncate-length="8"
                    label="Attach Birth Certificate"
                  ></v-file-input>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="country"
                    label="Nationality:"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="religion"
                    label="Religion:"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email:"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="phone"
                    label="Mobile Number:"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="address"
                    label="Address:"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="city"
                    label="City:"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="gselect"
                    :items="gender"
                    :rules="[(v) => !!v || 'Gender is required']"
                    label="Gender"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="select"
                    :items="status"
                    :rules="[(v) => !!v || 'Status is required']"
                    label="Marital Status"
                    required
                  ></v-select>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <!-- -->
              <p class="mt-5">2. Educational Details</p>
              <p>A. Ordinary Level Education</p>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    v-model="ordinary"
                    label="O-level School:"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8">
                  <v-text-field
                    v-model="reg1"
                    label="Registration Number:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-file-input
                    truncate-length="10"
                    label="Attach Certificate"
                  ></v-file-input>
                </v-col>
              </v-row>
              <!-- -->
              <p>B. Advance Level Education</p>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    v-model="advance"
                    label="A-level School:"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8">
                  <v-text-field
                    v-model="reg2"
                    label="Registration Number:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-file-input
                    truncate-length="10"
                    label="Attach Certificate"
                  ></v-file-input>
                </v-col>
              </v-row>
              <!-- -->
              <p>C. Diploma Level Education</p>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    v-model="ordinary"
                    label="Diploma Institution:"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8">
                  <v-text-field
                    v-model="reg3"
                    label="Registration Number:"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-file-input
                    truncate-length="10"
                    label="Attach Certificate"
                  ></v-file-input>
                </v-col>
              </v-row>
              <!-- -->
              <v-divider></v-divider>
              <p class="mt-5">3. Course Selection</p>
              <v-row>
                <v-select
                  v-model="college"
                  :items="colleges"
                  :rules="[(v) => !!v || 'College is required']"
                  label="College"
                  required
                ></v-select>
              </v-row>
              <v-row>
                <v-select
                  v-model="course"
                  :items="courses"
                  :rules="[(v) => !!v || 'Course is required']"
                  label="Selection 1:"
                  required
                ></v-select>
              </v-row>
              <v-row>
                <v-select
                  v-model="course2"
                  :items="courses2"
                  :rules="[(v) => !!v || 'Course is required']"
                  label="Selection 2:"
                  required
                ></v-select>
              </v-row>
              <v-row>
                <v-select
                  v-model="course3"
                  :items="courses3"
                  :rules="[(v) => !!v || 'Course is required']"
                  label="Selection 3:"
                  required
                ></v-select>
              </v-row>

              <v-btn
                class="mt-5"
                type="submit"
                elevation="20"
                color="primary"
                width="200"
                height="40"
              >
                submit Application
              </v-btn>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    
  </v-app>
</template>
<script>
import NavDrawerTwo from "../views/NavDrawerTwo.vue";

export default {
  name: "StudentOne",
  components: {
    NavDrawerTwo,
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
   
    //bdate, dateRules
    gselect: null,
    gender: ["Female", "Male"],
    select: null,
    status: ["Single", "Married"],
    college: null,
    colleges: [
      "  College of Informatics and Virtual Education (CIVE)",
      "  College of Earth Sciences and Engineering (COESE)",
      " College of Natural and Mathematical Science (CNMS)",
      "College of Business Education (COBE)",
      " College of Education (COED)",
      "Confucious Institution (CI)",
      "School of Law (SoL)",
      "School of Health and Medical Science (SoHM)",
      "School of Nursing (SoN)",
    ],
    course: null,
    courses: [
      "Bachelor of Science in Business Information Systems",
      "Bachelor of Science in Electronics and Telecommunication Engineering",
      "Bachelor of Science in Computer Engineering",
      "Bachelor of Science in Computer Science",
      "Bachelor of Science in Computer Network and Information Security Engineering",
      " Bachelor of Science in Cyber Security and Digital Forensics Engineering",
      " Bachelor of Science in Digital Content and Broadcasting Engineering",
      "Bachelor of Science in Health Information Systems",
      "Bachelor of Science in Information Systems",
      "  Bachelor of Science in Multimedia Technology and Animations",
      "Bachelor of Science in Software Engineering",
    ],
    course2: null,
    courses2: [
      "Bachelor of Science in Business Information Systems",
      "Bachelor of Science in Electronics and Telecommunication Engineering",
      "Bachelor of Science in Computer Engineering",
      "Bachelor of Science in Computer Science",
      "Bachelor of Science in Computer Network and Information Security Engineering",
      " Bachelor of Science in Cyber Security and Digital Forensics Engineering",
      " Bachelor of Science in Digital Content and Broadcasting Engineering",
      "Bachelor of Science in Health Information Systems",
      "Bachelor of Science in Information Systems",
      "  Bachelor of Science in Multimedia Technology and Animations",
      "Bachelor of Science in Software Engineering",
    ],
    course3: null,
    courses3: [
      "Bachelor of Science in Business Information Systems",
      "Bachelor of Science in Electronics and Telecommunication Engineering",
      "Bachelor of Science in Computer Engineering",
      "Bachelor of Science in Computer Science",
      "Bachelor of Science in Computer Network and Information Security Engineering",
      " Bachelor of Science in Cyber Security and Digital Forensics Engineering",
      " Bachelor of Science in Digital Content and Broadcasting Engineering",
      "Bachelor of Science in Health Information Systems",
      "Bachelor of Science in Information Systems",
      "  Bachelor of Science in Multimedia Technology and Animations",
      "Bachelor of Science in Software Engineering",
    ],
  }),
};
</script>
<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
}
</style>
