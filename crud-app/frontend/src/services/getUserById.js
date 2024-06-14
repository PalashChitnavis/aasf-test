import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;
const getUserById = async (id) => {
  try {
    const response = await axios.get(`${backendURL}/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("API call error:", error.message);
    throw error;
  }
};

export { getUserById };
