
const SelectedItems = ({ searchData }: any) => {
    const isCityEntered = searchData.city && searchData.city.trim() !== "";
  if (!searchData) {
    return null; 
  }
  const isPriceRangeSelected =
    searchData.priceRange &&
    searchData.priceRange.length === 2 &&
    searchData.priceRange[0] !== 0 &&
    searchData.priceRange[1] !== 50000000;

  return (
    <div className="selected-items">
       {isCityEntered && (
        <p className="selected-item">{searchData.city}</p>
      )}
     {searchData.selectedItems.length > 0 && (
  <div className="selected-items">
    
    
      {searchData.selectedItems.map((item:any, index:any) => (
        <p key={index} className="selected-item">{item}</p>
      ))}
    
  </div>
)}

      {isPriceRangeSelected && (
        <p className="selected-item">
          {searchData.priceRange.join(" to ")}
        </p>
      )}
    </div>
  );
};

export default SelectedItems;
