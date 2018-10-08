import axios from "axios";

const host = "http://192.168.230.75:9090/api";

export const getEvent = id => {
  return Promise.all([
    axios.get(`${host}/events/${id}`),
    axios.get(`${host}/events/${id}/map`)
  ]).then(([eventData, positionsData]) => {
    return {
      event: eventData.data.event,
      positions: positionsData.data.event_stalls
    };
  });
};

export const getAllEvents = () => {
  return axios.get(`${host}/events`);
};

export const getAllUpdates = event_id => {
  return axios.get(`${host}/updates/${event_id}`);
};

export const getStallUpdates = (event_id, stall_id) => {
  return axios.get(`${host}/updates/${event_id}/${stall_id}`).catch(console.log);
};

export const getStallInfo = stall_id => {
  return axios.get(`${host}/stalls/${stall_id}`);
};

export const createStall = body => {
  return axios.post(`${host}/stalls`);
};
export const postUpdate = body => {
  return axios.post(`${host}/updates`, body);
};

export const socketHost = "192.168.230.75";
