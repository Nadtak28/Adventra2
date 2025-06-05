import axios from "axios";
import { REQUEST_STATUS } from "./requestStatus";
import { checkInternet } from "../utils/checkinternetFunction";

export class Moujaas {
  async post(url, data, headers = {}) {
    if (!(await checkInternet())) return [REQUEST_STATUS.OFFLINE_FAILURE, null];

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      if ([200, 201].includes(response.status)) {
        return [REQUEST_STATUS.SUCCESS, response.data];
      } else {
        return [REQUEST_STATUS.SERVER_FAILURE, null];
      }
    } catch (error) {
      console.error("Server Exception:", error);
      return [REQUEST_STATUS.SERVER_EXCEPTION, null];
    }
  }

  async get(url, headers = {}) {
    if (!(await checkInternet())) return [REQUEST_STATUS.OFFLINE_FAILURE, null];

    try {
      const response = await axios.get(url, { headers });

      if ([200, 201].includes(response.status)) {
        return [REQUEST_STATUS.SUCCESS, response.data];
      } else {
        return [REQUEST_STATUS.SERVER_FAILURE, null];
      }
    } catch (error) {
      console.error("Server Exception:", error);
      return [REQUEST_STATUS.SERVER_EXCEPTION, null];
    }
  }

  async uploadImage(url, file, headers = {}) {
    if (!(await checkInternet())) return [REQUEST_STATUS.OFFLINE_FAILURE, null];

    try {
      const formData = new FormData();
      formData.append("profile_image", file);

      const response = await axios.post(url, formData, {
        headers: {
          ...headers,
          // Content-Type is automatically set for FormData
        },
      });

      if ([200, 201].includes(response.status)) {
        return [REQUEST_STATUS.SUCCESS, response.data];
      } else {
        return [REQUEST_STATUS.SERVER_FAILURE, null];
      }
    } catch (error) {
      console.error("Server Exception:", error);
      return [REQUEST_STATUS.SERVER_EXCEPTION, null];
    }
  }
}
