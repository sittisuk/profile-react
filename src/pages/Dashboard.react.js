import React from 'react';
import NewRepoForm from '../Components/NewRepoForm.react';
import RepositoryList from '../Components/RepositoryList.react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <NewRepoForm />
        <RepositoryList />
      </div>
    )
  }
}

export default Dashboard