import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes/routes.jsx";
import { queryClient } from "./apiServices/configs/tanstackQueryConfig.js";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ErrorBoundary fallback={({ error }) => <p>{error.message}</p>}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
);
