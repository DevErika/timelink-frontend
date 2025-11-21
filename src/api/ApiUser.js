const BASE_URL = "http://localhost:8080/api/users";

// Get all users
export async function getAllUsers() {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
}

// Get one user by ID
export async function getUserById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error("User not found");
  return response.json();
}

// Update user
export async function updateUser(id, payload) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Failed to update user");
  return response.json();
}
