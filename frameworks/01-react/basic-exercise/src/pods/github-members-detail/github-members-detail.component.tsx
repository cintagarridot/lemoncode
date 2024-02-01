import React from "react";
import { Link } from "react-router-dom";

import { Constants } from "./github-members-detail.contants";

interface Props {
    id: string,
}

export const MemberDetails: React.FC<Props> = ({
    id
}) => {
  return (
    <>
      <h2>{Constants.titleDetails}</h2>
      <h3>{Constants.userId} {id}</h3>
      <Link to='/list'>{Constants.backToListPage}</Link>
    </>
  );
};
