export const isAuthenticated = () => {
  return !!localStorage.getItem("access_token");
};

export const logout = () => {
  localStorage.removeItem("access_token");
  window.location.href = "/login";
};

export const getToken = () => {
  return localStorage.getItem("access_token");
};

export const setToken = (token: string) => {
  localStorage.setItem("access_token", token);
};

export const validateToken = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch("http://localhost:3001/doctors", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.ok;
  } catch (error) {
    console.error("Token validation error:", error);
    return false;
  }
};
