<template>
  <v-app>
    <div class="d-flex align-center px-5 py-3">
      <v-img max-width="200" alt="OfficeNexus" src="/images/logo.svg" />
    </div>

    <v-main>
      <router-view />
    </v-main>
    <div class="px-5 font-weight-light text-caption grey--text py-2">
      © 2023, Keture (Pvt) Ltd. All rights reserved.
    </div>
  </v-app>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    computed: mapState({
      //
    }),
    components: {
      //
    },
    data: () => ({
      //
    }),
    created() {
      //
    },
    mounted() {
      //
    },
    methods: {
      //
    },
  };
  </script>

<style>

</style>