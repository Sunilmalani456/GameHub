import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "262d1c167f34440c98f84399fb2027de",
  },
});
