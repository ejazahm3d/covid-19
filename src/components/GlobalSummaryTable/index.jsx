import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGlobalSummaryData } from "../../store/actions";

const GlobalSummaryTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGlobalSummaryData());
  }, [dispatch]);
  return <></>;
};

export default GlobalSummaryTable;
