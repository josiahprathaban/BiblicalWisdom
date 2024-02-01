<template>
  <v-container fill-height fluid justify-center>
    <div class="d-flex flex-column align-center">
      <div
        class="text-md-h2 text-h4 grey--text text--lighten-2 font-weight-bold"
      >
        ⊙︿⊙
      </div>
      <div class="my-3 text-md-h6 grey--text font-weight-regular">
        Sorry, your token expired, login again.
      </div>
      <v-btn depressed class="grey--text text--darken-1 text-capitalize"
        >Login</v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  created() {
    this.$store.dispatch("logout");
  },
};
</script>
