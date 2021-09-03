import { DATA_LIST } from "../Types/index";
import { API_URL } from "../../configs";
import axios from "axios";

export const GetDataList = () => {
  return async (dispatch) => {
    try {
      const resp = await axios({
        url: API_URL + "dataProvince",
        method: "get",
      });
      console.log("resp", resp);
      dispatch({ type: DATA_LIST, data: resp.data });
    } catch (err) {
      console.log(err);
    }
  };
};
