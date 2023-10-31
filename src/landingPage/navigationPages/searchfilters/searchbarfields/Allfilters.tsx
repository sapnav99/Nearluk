import { useState } from "react";
import "./Allfilters.css";

const SelectedItems = ({ searchData }: any) => {
  if (!searchData) {
    return null;
  }

  const displayedItems = [];

  if (
    searchData &&
    searchData.city !== undefined &&
    searchData.city &&
    searchData.city.trim() !== ""
  ) {
    displayedItems.push(searchData.city);
  }
  if (
    searchData &&
    searchData.selectedItems !== undefined &&
    searchData.selectedItems
  ) {
    displayedItems.push(searchData.selectedItems);
  }
  if (searchData.minprise !== 0 && searchData.maxprise <= 500000000) {
    displayedItems.push(`${searchData.minprise} to ${searchData.maxprise}`);
  }
  if (searchData && searchData.bhk !== undefined && searchData.bhk) {
    displayedItems.push(searchData.bhk);
  }
  if (
    searchData &&
    searchData.posted_by !== undefined &&
    searchData.posted_by
  ) {
    displayedItems.push(searchData.posted_by);
  }
  if (
    searchData &&
    searchData.construction_status !== undefined &&
    searchData.construction_status
  ) {
    displayedItems.push(searchData.construction_status);
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
