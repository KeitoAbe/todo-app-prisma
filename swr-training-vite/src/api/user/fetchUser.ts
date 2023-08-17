import axios from "axios";
import { UserSchema, userSchema } from "../../models/userSchema";

export const fetchUser = async () => {
  const { data } = await axios.request<UserSchema>({
    url: "/user",
    method: "GET",
  });
  return userSchema.parse(data);
};
