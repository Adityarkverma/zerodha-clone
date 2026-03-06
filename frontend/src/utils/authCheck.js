import axios from "axios";

export const checkAuth = async () => {
  try {
    const { data } = await axios.post(
      "http://localhost:3002/auth/verify",
      {},
      { withCredentials: true }
    );
    return data.status;
  } catch (err) {
    return false;
  }
};