import React from "react";
import { Link, useParams } from "react-router-dom";
import { backToListPage, titleDetails, userId } from "../constants";

export const DetailPage: React.FC = () => {
  const {id} = useParams();

  return (
    <>
      <h2>{titleDetails}</h2>
      <h3>{userId} {id}</h3>
      <Link to="/list">{backToListPage}</Link>
    </>
  );
};
