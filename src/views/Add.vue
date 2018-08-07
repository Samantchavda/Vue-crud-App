<template>
    <div class="AddUpdateCustomer">
        Added new customer
    </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      empolyeeId: 0,
      empolyeeData: {}
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      if (isNaN(this.$route.params.id) && this.$route.params.id > 0) {
        //get call and Update data
      } else {
        // insert data
      }
    }
  }
};
</script>

<style scoped>
</style>
