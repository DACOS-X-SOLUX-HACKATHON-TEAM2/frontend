import { axiosInstance } from "../../../apis/axios";

export const postLike = async (cosmetics_id: number) => {
  try {
    const { data } = await axiosInstance.post(`/recommend/${cosmetics_id}`, {});
    return data;
  } catch (error) {
    console.error(error);
  }
};
