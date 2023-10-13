import { useState } from "react";

type PropertyType =
  | "Commercial"
  | "Office"
  | "Residential"
  | "Playground"
  | "Parking Spaces"
  | "Hostel/PG"
  | "Event";
const SearchTabs = () => {
  const [selectedSearchItems, setSelectedSearchItems] = useState<
    PropertyType[]
  >([]);

  const handleItemClick = (item: PropertyType) => {
    if (selectedSearchItems.includes(item)) {
      setSelectedSearchItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedSearchItems((prevSelectedItems) => [
        ...prevSelectedItems,
        item,
      ]);
    }
  };
  return (
    <div>
      <ul className="searchtabs">
        <li
          style={{
            marginRight: "20px",
            backgroundColor: selectedSearchItems.includes("Commercial")
              ? "rgba(63, 219, 209, 1)"
              : "transparent",
            color: selectedSearchItems.includes("Commercial")
              ? "black"
              : "inherit",
          }}
          onClick={() => handleItemClick("Commercial")}
        >
          <a>Commercial</a>
        </li>
        <li
          style={{
            marginRight: "20px",
            backgroundColor: selectedSearchItems.includes("Event")
              ? "rgba(63, 219, 209, 1)"
              : "transparent",
            color: selectedSearchItems.includes("Event") ? "black" : "inherit",
          }}
          onClick={() => handleItemClick("Event")}
        >
          <a>Event</a>
        </li>
        <li
          style={{
            marginRight: "20px",
            backgroundColor: selectedSearchItems.includes("Hostel/PG")
              ? "rgba(63, 219, 209, 1)"
              : "transparent",
            color: selectedSearchItems.includes("Hostel/PG")
              ? "black"
              : "inherit",
          }}
          onClick={() => handleItemClick("Hostel/PG")}
        >
          <a>Hostel/PG</a>
        </li>
        <li
          style={{
            marginRight: "20px",
            backgroundColor: selectedSearchItems.includes("Office")
              ? "rgba(63, 219, 209, 1)"
              : "transparent",
            color: selectedSearchItems.includes("Office") ? "black" : "inherit",
          }}
          onClick={() => handleItemClick("Office")}
        >
          <a>Office</a>
        </li>
        <li
          style={{
            marginRight: "20px",
            backgroundColor: selectedSearchItems.includes("Residential")
              ? "rgba(63, 219, 209, 1)"
              : "transparent",
            color: selectedSearchItems.includes("Residential")
              ? "black"
              : "inherit",
          }}
          onClick={() => handleItemClick("Residential")}
        >
          <a>Residential</a>
        </li>
        <li
          style={{
            marginRight: "20px",
            backgroundColor: selectedSearchItems.includes("Playground")
              ? "rgba(63, 219, 209, 1)"
              : "transparent",
            color: selectedSearchItems.includes("Playground")
              ? "black"
              : "inherit",
          }}
          onClick={() => handleItemClick("Playground")}
        >
          <a>Playground</a>
        </li>
        <li
          style={{
            marginRight: "20px",
            backgroundColor: selectedSearchItems.includes("Parking Spaces")
              ? "rgba(63, 219, 209, 1)"
              : "transparent",
            color: selectedSearchItems.includes("Parking Spaces")
              ? "black"
              : "inherit",
          }}
          onClick={() => handleItemClick("Parking Spaces")}
        >
          <a>Parking Spaces</a>
        </li>
      </ul>
    </div>
  );
};

export default SearchTabs;
