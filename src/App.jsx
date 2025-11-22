import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import RecommendationList from "./components/RecommendationList";
import useRecommendations from "./hooks/useRecommendations";

export default function App() {
  const { query, setQuery, recommendations, loading, getRecommendations } = useRecommendations();

  // Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="min-h-screen bg-black text-gray-200 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <h1 className="text-4xl font-bold text-center">⚡ AI Product Finder</h1>

        {/* Search */}
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 space-y-4">
          <SearchBar query={query} setQuery={setQuery} loading={loading} onSubmit={getRecommendations} />
          <RecommendationList recommendations={recommendations} loading={loading} />
        </div>

        {/* Products */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">📦 All Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>

          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>

      </div>
    </div>
  );
}
