import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductCont from "./pages/ProjectContainer";
import NewProductPage from "./pages/PostNewProductPage";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewProductPage />
  </StrictMode>
);
