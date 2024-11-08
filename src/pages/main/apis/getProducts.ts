import { axiosInstance } from "../../../apis/axios";
import { apiResponse } from "../../../types/axios";

interface ProductsPropType {
  cosmetics_id: number;
  routine: number;
  name: string;
  description: string;
  type: number;
  img: string;
}

export const getProducts = async (user_id: number) => {
  try {
    const { data } = await axiosInstance.get<apiResponse<ProductsPropType>>(
      `/recommend/${user_id}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
