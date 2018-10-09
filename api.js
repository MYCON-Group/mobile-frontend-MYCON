import axios from "axios";

const host = "http://18.130.80.91:443/api";

const withErrorHandling = func => {
  return (...args) => {
    return func(...args).catch(err => console.log(err));
  };
};

export const getEvent = withErrorHandling(id => {
  return Promise.all([
    axios.get(`${host}/events/${id}`),
    axios.get(`${host}/events/${id}/map`)
  ]).then(([eventData, positionsData]) => {
    return {
      event: eventData.data.event,
      positions: positionsData.data.event_stalls
    };
  });
});

export const getStallName = withErrorHandling(stall_name => {
  return axios.get(`${host}/stalls/${stall_name}/login`);
});

export const getAllEvents = withErrorHandling(() => {
  return axios.get(`${host}/events`);
});

export const getAllUpdates = withErrorHandling(event_id => {
  return axios.get(`${host}/updates/${event_id}`);
});

export const getStallUpdates = withErrorHandling((event_id, stall_id) => {
  return axios.get(`${host}/updates/${event_id}/${stall_id}`);
});

export const getStallInfo = withErrorHandling(stall_id => {
  return axios.get(`${host}/stalls/${stall_id}`);
});

export const createStall = withErrorHandling(body => {
  return axios.post(`${host}/stalls`);
});

export const postUpdate = withErrorHandling(body => {
  return axios.post(`${host}/updates`, body);
});

export const getStallLogos = withErrorHandling(event_id => {
  return axios.get(`${host}/events/${event_id}/stalls`);
});

export const socketHost = "18.130.80.91";
