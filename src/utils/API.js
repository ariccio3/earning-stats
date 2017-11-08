import axios from "axios";

export default {
  // Gets the User with the given stock
  getUserSkill: function(stock) {
    return axios.get("/api/users/" + stock);
  }
};
