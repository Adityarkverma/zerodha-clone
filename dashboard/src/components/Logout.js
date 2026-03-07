import React, { useEffect } from "react";
import axios from "axios";

const Logout = () => {
  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.post(
          "/logout",
          {},
          { withCredentials: true },
        );

        window.location.href = "/";
      } catch (error) {
        console.log("Logout error:", error);
      }
    };

    logoutUser();
  }, []);

  return null;
};

export default Logout;
