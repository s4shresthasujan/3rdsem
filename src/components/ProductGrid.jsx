export default function ProductGrid({ products }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Search Results</h1>
      {products.length === 0 ? (
        <p className="text-gray-500">No items to display.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
            >
              <div className="w-full h-48 bg-white flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-sm mb-1 leading-tight">
                  {product.name}
                </h2>
                <p className="text-gray-700 font-medium text-sm">
                  Rs.{product.price}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
