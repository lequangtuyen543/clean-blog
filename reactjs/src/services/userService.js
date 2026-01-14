import { GET, POST } from "../utils/request";

export const checkExist = async (key, value) => {
  const result = await GET(`user?${key}=${value}`);
  return result;
};

export const createUser = async (data) => {
  const result = await POST(`user`, data);
  return result;
};