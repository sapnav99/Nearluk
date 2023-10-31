import React, { useEffect } from "react";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import { useDispatch, useSelector } from "react-redux";
import { nearuActions } from "./redux/action";
import { ThreeCircles } from "react-loader-spinner";
import PropertyCard from "../../components/propertycard/PropertyCard";

const NearU: React.FC = () => {
  const currentLocation = useCurrentLocation();
  console.log("from nearu", currentLocation);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(nearuActions.fetchNearudata(currentLocation));
  }, [currentLocation]);

  const loader = useSelector((state: any) => state?.NearuReducer?.nearuLoader);

  const nearuData = useSelector((state: any) => state?.NearuReducer?.nearuData);

  if (loader) {
    return (
      <ThreeCircles
        height="50"
        width="100"
        color="#4fa94d"
        wrapperStyle={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    );
  }

  console.log("nearu data", nearuData);

  return (
    <div className="container">
      <div className="row mt-2">
        {nearuData.map((property: any) => (
          <PropertyCard property={property} page="nearu" />
        ))}
      </div>
    </div>
  );
};
export default NearU;
