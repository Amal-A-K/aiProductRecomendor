export default function SearchBar({ query, setQuery, loading, onSubmit }) {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Example: phone under $500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] 
        focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-500 outline-none"
      />

      <button
        onClick={onSubmit}
        disabled={loading}
        className={`w-full py-3 rounded-lg font-medium transition ${
          loading
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {loading ? "Analyzing..." : "🔍 Get AI Recommendations"}
      </button>
    </div>
  );
}
