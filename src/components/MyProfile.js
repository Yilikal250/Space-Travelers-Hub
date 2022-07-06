import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './navbar';

function MyProfile() {
  const dragon = useSelector((state) => state.dragons);
  const dragonList = dragon.filter((item) => item.reserved === true);
  return (
    <>
      <NavBar />
      <h1>My Dragons</h1>
      <div>
        {dragonList.map((item) => (
          <div className="dragons-myprofile-item" key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyProfile;
