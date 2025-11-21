import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <div className="app-shell">
            <Header />
            <AppRouter />
            <Footer />
          </div>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}
