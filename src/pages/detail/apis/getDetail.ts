import { axiosInstance } from "../../../apis/axios";
import { apiResponse } from "./../../../types/axios";

interface DetailProps {
  cosmetics_id: number;
  routine: number;
  name: string;
  description: string;
  type: number;
  img: string;
}

export const getDetail = async (cosmetics_id: number) => {
  try {
    const { data } = await axiosInstance.get<apiResponse<DetailProps>>(
      `/recommend/${cosmetics_id}`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
