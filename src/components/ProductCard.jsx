export default function ProductCard({ product }) {
  return (
    <div className="bg-[#111111] p-5 border border-[#2A2A2A] rounded-xl hover:scale-[1.02] transition">
      <img src={product.photo} alt={product.name} className="rounded-lg w-full h-48 object-cover" />
      <h3 className="font-semibold text-lg mt-3">{product.name}</h3>
      <p className="text-gray-400 text-sm">{product.description}</p>
      <p className="text-green-400 font-bold mt-2">${product.price}</p>
    </div>
  );
}
