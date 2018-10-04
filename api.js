import axios from "axios";

const host = 'http://192.168.100.21:9090/api'
// IP : 185.205.172.4
// export const getEvent = id => {
//   return axios
//     .get(`${host}/events/${id}`)
//     .then(({ data }) => {
//       console.log(data);
//       return data.event;
//     });
// };


export const getEvent = id => {
  return Promise.all([axios.get(`${host}/events/${id}`), axios.get(`${host}/events/${id}/map`)])
    .then(([eventData, positionsData]) => {
      return ({ event: eventData.data.event, positions: positionsData.data.event_stalls })
    })

};

