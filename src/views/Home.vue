<script>
import Utilities from "../components/Utilities.vue";
import axios from "axios";

export default {
  components: {
    Utilities,
  },
  methods: {
    async getData() {
      try {
        const users = await axios.get("api/users");

        console.log("data", users.data);
      } catch (error) {
        console.log(error);
      }
    },
    async postData(username, email, password) {
      try {
        const response = await axios.post("api/users/register", {
          username: username,
          email: email,
          password: password,
        });

        console.log(response.data);
      } catch (error) {
        console.error("Error during registration:", error);
      }
    },
  },
  mounted() {
    // this.postData("j.doe", "j.doe@gmail.com", "123456");
    this.getData();
  },
};
</script>
<template>
  <Utilities></Utilities>
</template>
