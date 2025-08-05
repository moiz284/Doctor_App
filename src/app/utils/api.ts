export const API_URL = "http://localhost:3001";

export const fetchWithAuth = async (
  path: string,
  options: RequestInit = {}
) => {
  const token = localStorage.getItem("access_token");
  return fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
};
