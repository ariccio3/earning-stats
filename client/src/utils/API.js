import axios from "axios";

export default {
  // Gets the User with the given stock
  getStock: function(stock) {
    return axios.get("/api/stocks/" + stock);
  }
};
