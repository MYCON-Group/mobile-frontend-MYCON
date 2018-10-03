import axios from "axios";

// IP : 185.205.172.4
export const getEvent = id => {
  return axios
    .get(`http://192.168.230.56:9090/api/events/${id}`)
    .then(({ data }) => {
      console.log(data);
      return data.event;
    });
};
