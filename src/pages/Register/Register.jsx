import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/ApiAuth";
import "./Register.scss";
import { useToast } from "../../context/ToastContext.jsx";


export default function Register() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    postalCode: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      address: formData.address || null,
      postalCode: formData.postalCode || null,
      bio: formData.bio || null,
    };

    try {
      setLoading(true);

      const result = await registerUser(payload);
      console.log("User registered:", result);

      showToast("Account created successfully!", "success");

      setTimeout(() => navigate("/login"), 2000);

    } catch (err) {
      console.error(err);

      showToast(err.message || "Error registering user.", "error");

    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="register-page">
      <section className="register-card">
        <h1 className="register-title">Create your TimeLink account</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-field">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="register-field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="register-field">
            <label htmlFor="password">Password *</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="register-field">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="register-field">
            <label htmlFor="address">Address (optional)</label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="register-field">
            <label htmlFor="postalCode">Postal Code (optional)</label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>

          <div className="register-field">
            <label htmlFor="bio">Bio (optional)</label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary register-submit"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </section>
    </main>
  );
}
