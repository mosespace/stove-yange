"use client";
import Search from "../components/search/Search";
import { useCart } from "../context/context";

export default function page() {
  const { search, handleSearch } = useCart();
  //   console.log(search, handleSearch);
  return (
    <div>
      {handleSearch.length > 0 ? (
        <Search data={handleSearch} />
      ) : (
        <div>No Related Data To Your Search, You can search again</div>
      )}
    </div>
  );
}
