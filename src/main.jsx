import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes/routes.jsx";
import { queryClient } from "./apiServices/configs/tanstackQueryConfig.js";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
);
