import { axiosInstance } from "../../../apis/axios";

export const postLike = async (cosmetics_id: number, user_id: number) => {
  try {
    const { data } = await axiosInstance.put(
      `/auth/recommend/${cosmetics_id}`,
      {
        user_id: user_id,
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
