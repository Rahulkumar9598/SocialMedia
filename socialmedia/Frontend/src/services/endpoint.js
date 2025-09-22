export const base_url = import.meta.env.VITE_BACKEND_URL

const api = {
   user: {
      getUserDetails: base_url + "/api/user/get-user-details",
      userLogin : base_url + "/api/user/login",
      userRegister : base_url + "/api/user/register"
   },
   post : {

   }
}
export default api