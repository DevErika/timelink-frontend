import AppRouter from "./routes/AppRouter";
import { ToastProvider } from "./context/ToastConText";

export default function App() {
  return (
    <ToastProvider>
      <AppRouter />
    </ToastProvider>
  );
}
