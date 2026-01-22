import { GET, POST } from "../utils/request";

export const getListPosts = async () => {
  const result = await GET(`posts`);
  return result;
};

export const getDetailPost = async (id) => {
  const result = await GET(`posts/${id}`);
  return result;
};

export const createPosts = async (data) => {
  const result = await POST(`posts`, data);
  return result;
};