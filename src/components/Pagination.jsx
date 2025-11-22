import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-[#1A1A1A] rounded border border-[#2A2A2A] disabled:opacity-40"
      >
        <FaChevronLeft />
      </button>

      <span className="px-3">{page} / {totalPages}</span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 bg-[#1A1A1A] rounded border border-[#2A2A2A] disabled:opacity-40"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
