import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MemberDetails } from "./github-members-detail.component";

export const MemberDetailPage: React.FC = () => {
  const { id } = useParams();

  return <MemberDetails id={id} />
};
