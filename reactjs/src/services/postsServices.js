import { GET } from "../utils/request";

export const getListPosts = async () => {
  const result = await GET(`posts`);
  return result;
};

export const getDetailPost = async (id) => {
  const result = await GET(`posts/${id}`);
  return result;
};