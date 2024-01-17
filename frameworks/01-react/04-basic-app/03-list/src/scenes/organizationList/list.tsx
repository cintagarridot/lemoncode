import React, { useState } from "react";
import Pagination from '@material-ui/lab/Pagination';
import { Link } from "react-router-dom";
import { avatarTitle, idTitle, listPageTitle, nameTitle, navigateToDetails, searchButton, searchLabel } from "../constants";
import { OrganizationContext } from "../../contexts/organizationContext";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const PER_PAGE = 5;

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const  {organization, setOrganization } = React.useContext(OrganizationContext)
  const [page, setPage] = useState<number>(1);
  const [noOfPages, setNoOfPages] = useState<number>();

  const fetchApi = () => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => {
        setMembers(json)
        setNoOfPages(Math.ceil(json.length / PER_PAGE));
      });
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

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <h2>{listPageTitle}</h2>+{" "}
      <Link to="/rick-and-morty/list">Rick y Morty List</Link>
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
        .slice((page - 1) * PER_PAGE, page * PER_PAGE)
        .map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/member/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">{navigateToDetails}</Link>
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
};
