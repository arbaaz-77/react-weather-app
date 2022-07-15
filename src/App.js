import Search from "./components/search/Search";

function App() {
  const handleSearchChange = (searchData) => {};

  return (
    <div className="max-w-[1080px] mx-auto p-10">
      <Search onSearchChange={handleSearchChange} />
    </div>
  );
}

export default App;
