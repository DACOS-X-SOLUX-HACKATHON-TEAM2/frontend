import { axiosInstance } from "../../../apis/axios";

export const putType = async (user_id: number) => {
  try {
    const { data } = await axiosInstance.put(
      `/auth/recommend/result/${user_id}`,
      {}
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
