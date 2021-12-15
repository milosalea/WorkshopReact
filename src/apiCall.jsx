import axios from "../src/axios";

export const API_DATA = {
  async getCurrentMatch() {
    const response = await axios.get(`/api/Event/currentMatch`);
    return response;
  },
  async createTicket(ticket) {
    const response = await axios.post(`/api/Event`, ticket);
    return response;
  },

  // TODO: Kreirati novi API poziv ka servisima type: GET i proslijediti payInOperator value kao URL parametar // URL: `/api/Event/result`
  async getResults(payInOperator) {
    const response = await axios.get("/api/Event/result", {
      params: {
        payInOperator
      }
    });
    return response;
  },
};
