const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

async function handleResponse(response) {
  if (!response.ok) {
    let message = "Request failed";

    try {
      const errorData = await response.json();
      if (errorData.message) message = errorData.message;
    } catch {}

    throw new Error(message);
  }

  if (response.status === 204) return null;
  return response.json();
}

export async function registerUser(payload) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}
