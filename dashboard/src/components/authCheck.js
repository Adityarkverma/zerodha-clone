import axios from "axios";

export const checkAuth = async () => {
  try {
    const { data } = await axios.post(
      "/auth/verify",
      {},
      { withCredentials: true }
    );
    return data;
  } catch (error) {
    return false;
  }
};