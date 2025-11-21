// LOGIN
export async function loginUser(payload) {
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // obtener texto sin intentar parsear JSON
      const error = await response.text();
      throw new Error(error);
    }

    // aquí SÍ es seguro parsear JSON
    return await response.json();

  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
}

// REGISTER
export async function registerUser(payload) {
  try {
    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || "Registration failed");
    }

    return await response.json();

  } catch (error) {
    console.error("Register error:", error.message);
    throw error;
  }
}
