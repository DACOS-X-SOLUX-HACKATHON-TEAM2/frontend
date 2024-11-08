import { axiosInstance } from "../../../apis/axios";

interface LogoutPropTypes {}

const accessToken = localStorage.getItem("accessToken");

export const logout = async (id: number) => {
  try {
    const { data } = await axiosInstance.post(`/auth/logout`, {
      header: {
        Authorization: `Bearer ${accessToken}`,
      },
      id: id,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
