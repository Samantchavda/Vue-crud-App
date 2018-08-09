<template>
    <div class="AddUpdateCustomer">

        Added new customer
        <b-btn @click="back">Back</b-btn>
        <form class="was-validated">
            <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
                <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
                <div class="invalid-feedback">Example invalid feedback text</div>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
                <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
            </div>
            <div class="custom-control custom-radio mb-3">
                <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
                <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
                <div class="invalid-feedback">More example invalid feedback text</div>
            </div>
            <div class="form-group">
                <select class="custom-select" required>
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="invalid-feedback">Example invalid custom select feedback</div>
            </div>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
            </div>
        </form>

        <div>
            <b-form @submit="onSubmit" @reset="onReset" >
                <b-form-group id="exampleInputGroup1"
                              label="Email address:"
                              label-for="exampleInput1"
                              description="We'll never share your email with anyone else.">
                    <b-form-input id="exampleInput1"
                                  type="email"
                                  v-model="form.email"
                                  required
                                  placeholder="Enter email">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                              label="Your Name:"
                              label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                  type="text"
                                  v-model="form.name"
                                  required
                                  placeholder="Enter name">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup3"
                              label="Food:"
                              label-for="exampleInput3">
                    <b-form-select id="exampleInput3"
                                   :options="foods"
                                   required
                                   v-model="form.food">
                    </b-form-select>
                </b-form-group>
                <b-form-group id="exampleGroup4">
                    <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                        <b-form-checkbox value="me">Check me out</b-form-checkbox>
                        <b-form-checkbox value="that">Check that out</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      empolyeeId: 0,
      empolyeeData: {},
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ]
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
      }
    },
    back: function() {
      this.$router.push({ name: "Home" });
    },
    onSubmit: function() {},
    onReset: function() {}
  }
};
</script>

<style scoped>
</style>
