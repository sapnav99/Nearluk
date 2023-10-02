import React, { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import SearchBar from "../../components/searchbar/SearchBar";
import Sectionbar from "../../components/sectionbar/Sectionbar";
import { useDispatch, useSelector } from "react-redux";
import { allpropdataactions } from "./redux/action";

type Props = {};
interface propdetails {}

const Home = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, []);
  const dataFromApi = useSelector(
    (state: any) => state?.homeReducer?.allProperty
  );

  return (
    <div>
      <SearchBar />
      <Sectionbar />
      <Content dataFromApi={dataFromApi} />
    </div>
  );
};

export default Home;
