import { Bookmark, Package, ShoppingCart } from "lucide-react";

function QuickActions() {
  const quickActions = [
    { icon: Package, label: "My Listings", color: "text-gray-600" },
    { icon: ShoppingCart, label: "My Orders", color: "text-gray-600" },
  ];
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-8 px-4">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors flex flex-col items-center text-center space-y-2"
          >
            <action.icon className={`w-5 h-5 ${action.color}`} />
            <span className="text-sm font-medium text-gray-700">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

export default QuickActions;
