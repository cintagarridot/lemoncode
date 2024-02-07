import React from "react";
import { Link } from "react-router-dom";

import { Constants } from "./github-members-detail.contants";
import { MemberEntity } from "./github-members-detail.vm";
import './github-members-detail.styles.css';

interface Props {
  member: MemberEntity,
}

export const MemberDetails: React.FC<Props> = ({
  member
}) => {
  return (
    <>
      <div className="titleAndImage">
        <div>
          <h2>{Constants.titleDetails}</h2>
          <h3>{Constants.userName} {member?.login}</h3>
          <h3>{Constants.userId} {member?.id}</h3>
        </div>
        <img title={Constants.memberImageTitle} className="image" src={member?.avatar_url} />
        </div>
        <Link className="link" to='/list'>{Constants.backToListPage}</Link>
    </>
  );
};


