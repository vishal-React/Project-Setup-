import { lazy } from "react";
export const AppPage = lazy(() => import("../components/App"));
export const ErrorPage = lazy(
  () => import("../components/ErrorPage/ErrorPage"),
);
export const NotFoundPage = lazy(
  () => import("../components/NotFound/NotFound"),
);
