import { serverCaller } from "./helper";

export const userRegistration = async (user) => {
  await serverCaller
    .post("api/v1/messaging-application/authentication/createUser", user)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}