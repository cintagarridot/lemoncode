import React, { useState } from "react";
import { OrganizationContext } from "../../core/organizations/organizations.context";
import { GithubMembersList } from "./github-members.component";
import { MemberEntity } from "./github-members.vm";
import { Constants } from "./github-members.constants";
import { getMembersByOrganization } from "./api";


export const MembersListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const  {organization, setOrganization } = React.useContext(OrganizationContext)
  const [page, setPage] = useState<number>(1);
  const [noOfPages, setNoOfPages] = useState<number>();

  const fetchApi = () => {
    if (organization !== '') {
      getMembersByOrganization(organization)
      .then((data) => {
        setMembers(data)
        setNoOfPages(Math.ceil(data.length / Constants.PER_PAGE));
      });
    }
  }

  React.useEffect(() => {
    fetchApi();
  }, []);

  const handleOnChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(event.target.value);
  };

  const handleOnClick = () => {
    fetchApi();
  };

  const handleChange = (_event, value) => {
    setPage(value);
  };

  return <GithubMembersList 
    members={members}
    handleChange={handleChange}
    handleOnChangeInputValue={handleOnChangeInputValue}
    handleOnClick={handleOnClick}
    noOfPages={noOfPages}
    organization={organization}
    page={page}
  />
};
