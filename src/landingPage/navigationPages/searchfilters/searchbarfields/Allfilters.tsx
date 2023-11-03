import { useState } from "react";
import "./Allfilters.css";
import { useSelector } from "react-redux";
const SelectedItems = () => {
  const searchdata = useSelector((state:any)=>state.filtersReducer)
  if (!searchdata) {
    return null;
  }

  const displayedItems = [];

  if (
    searchdata &&
    searchdata.city !== undefined &&
    searchdata.city &&
    searchdata.city.trim() !== ""
  ) {
    displayedItems.push(searchdata.city);
  }
  if (
    searchdata &&
    searchdata.selectedItems !== undefined &&
    searchdata.selectedItems
  ) {
    displayedItems.push(searchdata.selectedItems);
  }
  if (searchdata.minprise !== 0 && searchdata.maxprise <= 500000000) {
    displayedItems.push(`${searchdata.minprise} to ${searchdata.maxprise}`);
  }
  if (searchdata && searchdata.bhk !== undefined && searchdata.bhk) {
    displayedItems.push(searchdata.bhk);
  }
  if (
    searchdata &&
    searchdata.posted_by !== undefined &&
    searchdata.posted_by
  ) {
    displayedItems.push(searchdata.posted_by);
  }
  if (
    searchdata &&
    searchdata.construction_status !== undefined &&
    searchdata.construction_status
  ) {
    displayedItems.push(searchdata.construction_status);
  }

  // const formattedItems = displayedItems.join(" , ");
  const [showAll, setShowAll] = useState(false);
  const displayCount = showAll ? displayedItems.length : 2;
  const displayedItemsToRender = displayedItems
    .slice(0, displayCount)
    .join(", ");

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="selected-items">
      <p>
        {displayedItemsToRender}
        {displayedItems.length > 2 && (
          <span className="toggle" onClick={toggleShowAll}>
            {showAll ? "Less" : " More..."}
          </span>
        )}
        {/* {showAll && displayedItems.length > 2 && (
          <span className="items">{formattedItems}</span>
        )} */}
      </p>
    </div>
  );
};

export default SelectedItems;
