import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function register(username, email, password) {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function login(username, password) {
  try {
    const response = await api.post("/login", {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getMe() {
  try {
    const response = await api.get("/get-me");
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

// previosuly this was our code ->

// export async function register(username, email, password) {
//   try {
//     const response = await axios.post(
//       "http://localhost:3000/api/auth/register",
//       {
//         username,
//         email,
//         password,
//       },
//       {
//         withCredentials: true,
//       },
//     );
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// export async function login(username, password) {
//   try {
//     const response = await axios.post(
//       "http://localhost:3000/api/auth/login",
//       {
//         username,
//         password,
//       },
//       {
//         withCredentials: true,
//       },
//     );
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// it was quite repetative and confusing , so to avoid it we created an axios instance and used it , as it is industry-level standard
