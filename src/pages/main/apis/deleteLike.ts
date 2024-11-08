import { axiosInstance } from "../../../apis/axios";

export const deleteLike = async (cosmetics_id: number, user_id: number) => {
  try {
    const { data } = await axiosInstance.delete(
      `/auth/recommend/${cosmetics_id}`,
      {
        data: {
          user_id: user_id,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
