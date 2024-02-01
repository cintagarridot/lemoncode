import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";
import { avatarTitle, idTitle, listPageTitle, nameTitle, navigateToDetails, searchButton, searchLabel } from "../../constants";
import { OrganizationContext } from "../../core/organizations/organizations.context";
import { Constants } from "./github-members.constants";
import { MemberEntity } from "./github-members.vm";

interface Props {
  members: MemberEntity[],
  organization: string,
  handleOnChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleOnClick: () => void,
  noOfPages: number,
  page: number,
  handleChange: (event, value) => void,
}

export const GithubMembersList: React.FC<Props> = ({
  members,
  organization,
  handleOnChangeInputValue,
  noOfPages,
  page,
  handleChange,
  handleOnClick,
}) => (

    <>
      <h2>{listPageTitle}</h2>+{" "}
      <Link to="/rick-and-morty/list">{Constants.rickAndMortyListLink}</Link>
      <div className="searchBar">
        <h3>{searchLabel}</h3>
        <input placeholder="Enter an organization" value={organization} onChange={handleOnChangeInputValue} type="search" className="inputSearch" />
        <button onClick={handleOnClick}>{searchButton}</button>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">{avatarTitle}</span>
        <span className="list-header">{idTitle}</span>
        <span className="list-header">{nameTitle}</span>
        {members
        .slice((page - 1) * Constants.PER_PAGE, page * Constants.PER_PAGE)
        .map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/member/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Pagination
        count={noOfPages}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </>
  );

