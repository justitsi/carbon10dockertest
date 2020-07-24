import React from 'react';
import ItemList from '../../components/ItemList';

const headers = [
  {
    key: "name",
    header: "Doc Name",
  },
  {
    key: "owner",
    header: "Owner",
  },
  {
    key: "lastEdit",
    header: "Last Edited",
  },
  {
    key: "editedBy",
    header: "Edited By",
  }
];

const rows = [
  {
    id: "1",
    name: "Doc 1",
    owner: "Ivan",
    lastEdit: "Yesterday",
    editedBy: "Hristo"
  },
  {
    id: "2",
    name: "Doc 2",
    owner: "Hristo",
    lastEdit: "5 minutes ago",
    editedBy: "Ivan"
  }
]
const MainPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          Hello World!
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-16">
          <ItemList
            headers = {headers}
            rows = {rows}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
