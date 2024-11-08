import { axiosInstance } from "../../../apis/axios";

export const postLike = async (cosmetics_id: number) => {
  try {
    const { data } = await axiosInstance.put(
      `/auth/recommend/${cosmetics_id}`,
      {
        user_id: 1,
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
