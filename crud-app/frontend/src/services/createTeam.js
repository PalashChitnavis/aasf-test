import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;
const createTeam = async (team) => {
  try {
    const response = await axios.post(`${backendURL}/api/team/`, team);
    alert("New Team Created with Team ID : " + response.data.details.id);
    return response.data;
  } catch (error) {
    console.error("API call error:", error.message);
    throw error;
  }
};

export { createTeam };
