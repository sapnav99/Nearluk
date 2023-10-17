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
  const isBHKselected = searchData.bhk;
  const isPostedbySelected = searchData.posted_by;
  const isConstructionStatus = searchData.construction_status;
  return (
    <div className="selected-items">
      {isCityEntered && <p className="selected-item">{searchData.city}</p>}
      {searchData.selectedItems.length > 0 && (
        <div className="selected-items">
          {searchData.selectedItems.map((item: any, index: any) => (
            <p key={index} className="selected-item">
              {item}
            </p>
          ))}
        </div>
      )}
      <div className="selected-items">
        {isPriceRangeSelected && (
          <p className="selected-item">{searchData.priceRange.join(" to ")}</p>
        )}
      </div>
      <div className="selected-items">
        {isBHKselected && <p className="selected-item">{searchData.bhk}</p>}
      </div>
      <div className="selected-items">
        {isPostedbySelected && (
          <p className="selected-item">{searchData.posted_by}</p>
        )}
      </div>
      <div className="selected-items">
        {isConstructionStatus && (
          <p className="selected-item">{searchData.construction_status}</p>
        )}
      </div>
    </div>
  );
};

export default SelectedItems;
