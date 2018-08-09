<template>
  <div class="home">
    <b-btn  @click="addCustomer">Add New Employee</b-btn>
    <!-- <b-table>

    </b-table> -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      selectedId: 0
    };
  },
  methods: {
    redirectToAddCustomer: function() {
      this.$router.push({ name: "Add", params: { id: this.selectedid } });
    },
    addCustomer: function() {
      this.selectedid = 0;
      this.redirectToAddCustomer();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
