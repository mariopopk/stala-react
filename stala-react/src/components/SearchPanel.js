import Search from "./Search";
import SidePanel from "./SidePanel";

function SearchPanel() {
  return (
    <SidePanel
      darkMode={true}
      dropdownId="search-panel"
      title={
        <>
          <i className="bi bi-search"></i>
          <span className="visually-hidden">Search Products</span>
        </>
      }
    >
      <div className="px-5 py-4">
        <Search />
      </div>
    </SidePanel>
  );
}

export default SearchPanel;
