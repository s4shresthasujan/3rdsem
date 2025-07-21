import { TrendingUp, DollarSign, MoreHorizontal } from "lucide-react";
function Stat() {
  const stats = [
    {
      title: "Total Listings",
      value: "23",
      change: "+2 this week",
      changeType: "positive",
      icon: MoreHorizontal,
    },
    {
      title: "Items Sold",
      value: "156",
      subtitle: "Rs.3,240 revenue",
      icon: DollarSign,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-6 mb-4 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">
                {stat.title}
              </div>
              <stat.icon className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-1">
              <div className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </div>
              {stat.change && (
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change}
                </div>
              )}
              {stat.subtitle && (
                <div className="text-sm text-gray-500">{stat.subtitle}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stat;
