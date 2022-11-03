// axios
import axios from "axios";

export const fetchData = async () => {
  try {
    const { data: response } = await axios.get("database/data.json");

    return response;
  } catch (ex: any) {
    console.log("[fetchWidgetData() ex]", ex);

    throw new Error(ex.message);
  }
};


