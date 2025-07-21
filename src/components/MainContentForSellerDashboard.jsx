import Stat from "./StatForSelerDashboard";
import QuickActions from "./QuickActionForSellerDashBoard";
import Listings from "./ListingForSellerDashboard";
import BasedonYourActivity from "./BasedForSellerDashboard";

function MainContent() {
  return (
    <>
      <div className="max-w-7xl px-4 py-3 pt-[90px]">
        <div className="mb-2">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome back, Alex
          </h1>
          <p className="text-gray-600">Manage your listings and orders</p>
        </div>
      </div>

      <Stat />
      <QuickActions />
      <Listings />
      <BasedonYourActivity />
    </>
  );
}

export default MainContent;
