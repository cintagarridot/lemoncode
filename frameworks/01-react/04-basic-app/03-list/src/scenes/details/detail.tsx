import React from "react";
import { Link, useParams } from "react-router-dom";
import { backToListPage, titleDetails, userId } from "../constants";

export const DetailPage: React.FC = () => {
  const {id, type} = useParams();

  return (
    <>
      <h2>{titleDetails}</h2>
      <h3>{userId} {id}</h3>
      <Link to={type === 'member' ? '/list' : '/rick-and-morty/list'}>{backToListPage}</Link>
    </>
  );
};
