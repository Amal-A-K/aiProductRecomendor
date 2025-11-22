import ProductCard from "./ProductCard";

export default function RecommendationList({ recommendations, loading }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">🎯 Recommended Products</h2>

      {recommendations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {recommendations.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        !loading && <p className="text-gray-400">No recommendations yet.</p>
      )}
    </div>
  );
}
