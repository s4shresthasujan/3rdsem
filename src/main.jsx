import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductCont from "./pages/ProjectContainer";
import NewProductPage from "./pages/PostNewProductPage";
import SearchResutlPage from "./pages/SearchResultPage";
import SellerDashboard from "./pages/SellerDashboard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SellerDashboard />
  </StrictMode>
);
