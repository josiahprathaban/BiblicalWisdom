<template>
  <v-app>
    <div class="d-flex align-center px-5 py-3">
      <v-img max-width="50" alt="OfficeNexus" src="/images/Icon.png" />
      <div class="text-h5 font-weight-medium">OfficeNexus</div>
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