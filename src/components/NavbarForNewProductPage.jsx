import { UserRound } from "lucide-react";

function NavbarForNewProductPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-200 px-6 py-4 mb-5 fixed right-0 left-0 top-0 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900 cursor-pointer">
            SmartCart
          </h1>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
            <UserRound className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarForNewProductPage;
