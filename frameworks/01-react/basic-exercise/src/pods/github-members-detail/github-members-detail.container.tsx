import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MemberDetails } from "./github-members-detail.component";
import { getMemberDetails } from "./api";
import { MemberEntity } from "./github-members-detail.vm";

export const MemberDetailPage: React.FC = () => {
  const [member, setMember] = useState<MemberEntity>();
  const { id } = useParams();

  const fetchApi = () => {
    getMemberDetails(id)
      .then((data) => {
        console.log('data', data);
        setMember(data)
      });
  }

  React.useEffect(() => {
    fetchApi();
  }, []);

  return <MemberDetails member={member} />
};
