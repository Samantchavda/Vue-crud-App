<template>
    <div class="AddUpdateCustomer">
        <b-btn @click="back">Back To Home</b-btn>
        <div class="form-container">
            <section class="form">
                <form v-on:submit.prevent="$validator.validateAll();">
                    <div role="group" class="b-form-group form-group">
                        <label class="col-form-label">First Name:</label>
                        <div>
                            <input name="fname" v-model="employee.fname" v-validate="'required|min:3'" v-bind:class="{'is-danger': errors.has('fname')}" class="form-control" type="text" placeholder="First name">
                            <p class="help is-danger" v-show="errors.has('fname')">
                                {{ errors.first('fname') }}
                            </p>
                        </div>
                    </div>
                    <div role="group" class="b-form-group form-group">
                        <label class="col-form-label">Middle Name:</label>
                        <div>
                            <input name="mname" v-model="employee.mname" v-validate="'required|min:3'" v-bind:class="{'is-danger': errors.has('mname')}" class="form-control" type="text" placeholder="Middle name">
                            <p class="help is-danger" v-show="errors.has('mname')">
                                {{ errors.first('mname') }}
                            </p>
                        </div>
                    </div>
                    <div role="group" class="b-form-group form-group">
                        <label class="col-form-label">Last Name:</label>
                        <div>
                            <input name="lname" v-model="employee.lname" v-validate="'required|min:3'" v-bind:class="{'is-danger': errors.has('lname')}" class="form-control" type="text" placeholder="Last name">
                            <p class="help is-danger" v-show="errors.has('lname')">
                                {{ errors.first('lname') }}
                            </p>
                        </div>
                    </div>
                    <div role="group" class="b-form-group form-group">
                        <label class="col-form-label">Message:</label>
                        <div>
                            <textarea name="message" class="form-control" v-validate="'required'" placeholder="Message" v-bind:class="{'is-danger': errors.has('message')}" v-model="employee.message"></textarea>
                            <p class="help is-danger" v-show="errors.has('message')">
                                {{ errors.first('message') }}
                            </p>
                        </div>
                    </div>

                    <button  v-bind:disabled="errors.any()" type="submit" class="btn btn-primary">Submit</button>
                    <button type="reset" class="btn btn-danger">Reset</button>

                </form>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      empolyeeId: 0,
      isvalidate: false,
      empolyeeData: {},
      employee: {
        email: "",
        fname: "",
        lname: "",
        mname: "",
        message: "",
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
    onSubmit: function() {
      isvalidate: true;
      debugger;
    },
    onReset: function() {}
  }
};
</script>

<style scoped>
.form-container{
    padding: 1.5rem;
}
</style>
