import SelectedItems from "./Allfilters";
import SearchFilters from "./SearchFilters";
import ToggleSwitch from "../Toggle";
import { useSelector } from "react-redux";

export default function SearchpageSidebar({ handleToggleChange }: any) {
  const filterData = useSelector((state: any) => state.filtersReducer);
  console.log("filterData", filterData);
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          {/* <div style={{ display: "flex", flexDirection: "column" }}>
          <p className="line-with-reversedot"></p>
          <p className="line-with-dot"></p>
          <p className="line-with-reversedot"></p>
        </div> */}

          <h6 style={{ marginTop: "0px" }}>Applied Filters</h6>
          <a
            style={{ marginRight: "30px", color: "#2F9F72" }}
            //   onClick={clearAll}
          >
            Clear all
          </a>
        </div>
        <div>
          <SelectedItems />
        </div>
        <div>
          <SearchFilters />

          <div className="selector">
            <p style={{ display: "flex" }}>
              <p
                style={{
                  marginRight: "88px",
                  marginLeft: "-7px",
                }}
              >
                With Photos
              </p>
              <p>
                <ToggleSwitch
                  Name="photos"
                  onChange={(value) => handleToggleChange("photos", value)}
                />
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
