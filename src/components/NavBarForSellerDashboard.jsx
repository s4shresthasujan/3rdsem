import { LayoutDashboard } from "lucide-react";
function NavBarForSellerDashboard() {
  return (
    <>
      <div className="flex justify-between items-center px-2 py-6 border-b border-gray-300 bg-white fixed left-0 right-0">
        <div className="flex items-center">
          <LayoutDashboard className="mr-3" />
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium mr-3">Alex Thompson</span>
          <div className="w-8 h-8 rounded-full border bg-gray-300 overflow-hidden">
            <img
              src="https://img.drz.lazcdn.com/static/np/p/0bf911dcf19a636a100867aab89e632d.jpg_720x720q80.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarForSellerDashboard;
