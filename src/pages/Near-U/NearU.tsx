import React, { useEffect } from "react";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import { useDispatch } from "react-redux";
import { nearuActions } from "./redux/action";

const NearU: React.FC = () => {
  const currentLocation = useCurrentLocation();
  console.log("from nearu", currentLocation);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(nearuActions.fetchNearudata(currentLocation));
  }, [currentLocation]);
  return (
    <div className="container">
      <h4>Near u</h4>
      <h4>Near u</h4>
      <h4>Near u</h4>
      <h4>Near u</h4>
    </div>
  );
};
export default NearU;
