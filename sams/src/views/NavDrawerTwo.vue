<template>
  <v-navigation-drawer color="#f5f5f5" v-model="drawer" app>
    <v-list-item>
      <v-list-item-content class="ml-6">
        <v-list-item-title class="text-h6"> UDOM </v-list-item-title>
        <v-list-item-subtitle> SAMS </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <!-- <v-list-item class="mt-5">
        <v-list-item-icon>
          <v-icon>mdi-home-city</v-icon>
        </v-list-item-icon>
        <v-btn router to="/StudentOne">Self Registration</v-btn>
      </v-list-item> -->

      <v-list-item class="mt-5 mr-4">
        <v-list-item-icon>
          <v-icon>mdi-view-list</v-icon>
        </v-list-item-icon>

        <v-btn router to="/StudentStatus">Allocation Status</v-btn>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-lock-reset</v-icon>
        </v-list-item-icon>

        <v-btn router to="/PasswordUser">Change Password</v-btn>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>

        <v-btn router to="/">Sign Out</v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawerTwo",
};
</script>

<style>
.centered {
  display: flex;
  justify-content: center;
  justify-items: center;
}
.cardB {
  background: rgba(245, 250, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.5);
  border-radius: 100px;
}
nav {
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100vw;
  background-color: rgb(20, 101, 193);
  padding: 30px;
}
nav .menu-item {
  color: white;
  padding: 1px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #6796d6;
  border-bottom-color: rgb(163, 30, 30);
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
