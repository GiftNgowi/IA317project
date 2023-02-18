<template>

     <v-footer color="#f5f5f5" class="footer">
            <v-row justify="center" no-gutters>
               <p class="text-center mt-2 mb-0">
          <v-icon>mdi-copyright</v-icon> Copyright UDOM-Student Admission System. All Rights
          Reserved {{ new Date().getFullYear() }}
        </p>
            </v-row>
        </v-footer>

</template>

<script>
export default {
}
</script>

<style>
.footer {
  position: fixed;
   bottom: 0;
    width: 100%;
    height: 60px;
    
}
</style>