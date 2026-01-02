import { GET } from "../utils/request";

export const getListPosts = async () => {
  const result = await GET(`posts`);
  return result;
};

