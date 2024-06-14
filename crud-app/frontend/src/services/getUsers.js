import axios from "axios";
const backendURL = import.meta.env.VITE_BACKEND_URL;
const getUsers = async (reqBody) => {
  try {
    const searchParams = new URLSearchParams(reqBody).toString();
    const response = await axios.get(
      `${backendURL}/api/users/?${searchParams}`
    );
    return response.data;
  } catch (error) {
    console.error("API call error:", error.message);
    throw error;
  }
};

export { getUsers };
