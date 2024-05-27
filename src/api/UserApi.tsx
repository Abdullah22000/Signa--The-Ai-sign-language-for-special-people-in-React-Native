import ApiManager from "./ApiManager";

export const user_login = async (data: any) =>{
    try {
        const result = await ApiManager('http://10.0.2.2:8000/api/v1.0/user/login-user/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data,
        });
        return result
    } catch (error: any) {
        return error.response.data
      }
}