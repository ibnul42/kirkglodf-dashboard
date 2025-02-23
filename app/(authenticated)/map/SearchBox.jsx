import OutlineMenuIcon from "@/components/IconComponent/OutlineMenuIcon";
import SearchIcon from "@/components/IconComponent/SearchIcon";

export default function SearchBox() {
  return (
    <div className="flex gap-2 items-center bg-white shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] rounded-full px-4 py-2 w-full max-w-md">
      {/* Search Icon */}
      <SearchIcon className="w-4 h-auto" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search"
        className="flex-grow outline-none bg-transparent text-gray-600 placeholder-gray-400 placeholder:text-sm text-sm"
      />

      {/* Filter/Menu Icon */}
      <OutlineMenuIcon className="w-4 h-auto" />
    </div>
  );
}
