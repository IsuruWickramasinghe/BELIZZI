import React from 'react';

import './profile.css';

import { signOut } from 'firebase/auth';

import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import { auth } from '../../config/firebase';


function Profile() {

  const navigate = useNavigate();
  
  const { user, userAddressForm, userFormData, handleUserData, handleUserAddress } = useStateContext()

  // sign out
  const signOutUser = async () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Check again');
      });
  };

  return (
    <div className="profile-page">

      {/* user details */}
      <div className="profile-details">
        <div className="profile-title">User Details</div>
        {/* user profile */}
        <form action="submit" onSubmit={handleUserData} id="userDocForm">
          {/* user name */}
          <div className="profile-data-field">
          <label>User name</label>
            <input
              required
              type="text"
              name="userName"
              id="userName"
              placeholder="User Name"
              defaultValue={userFormData?.userName || ''}
            />
          </div>
          {/* email */}
          <div className="profile-data-field">
          <label>Email</label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Email"
              disabled
              defaultValue={user?.email}
            />
          </div>
          {/* password */}
          <div className="profile-data-field">
            <Link to={"/reset-password"} style={{color: 'blue',textDecoration: 'underline'}}>Reset Password</Link>
          </div>
          {/* mobile number */}
          <div className="profile-data-field">
          <label>Phone</label>
            <input
              required
              type="number"
              name="userPhone"
              id="userPhone"
              placeholder="Phone"
              defaultValue={userFormData?.userPhone || ''}
            />
          </div>
          {/* submit btn */}
          <div className="user-details-submit-btn">
            <button className="btn-buy-black">Save Changes</button>
          </div>
        </form>
        <div className="sign-out-btn-wrapper">
          <button onClick={signOutUser} className="sign-out-btn">
            SIGN OUT
          </button>
        </div>
      </div>

      {/* address */}
      <div className="shipping-address">
        <div className="profile-title">
            User Address
        </div>
        <form action="submit" onSubmit={handleUserAddress} id='userAddressForm'>
          {/* country */}
          <div className="profile-data-field">
            <input required type="text" name='userCountry' id='userCountry' placeholder='Country' defaultValue={userAddressForm?.userCountry || ''}/>
          </div>
          {/* full name */}
          <div className="profile-data-field">
            <input required type="text" name='userFullName' id='userFullName' placeholder='Full Name' defaultValue={userAddressForm?.userFullName || ''}/>
          </div>
          {/* Address */}
          <div className="profile-data-field">
            <input required type="text" name='userAddress' id='userAddress' placeholder='Address' defaultValue={userAddressForm?.userAddress || ''}/>
          </div>
          {/* city */}
          <div className="profile-data-field">
            <input required type="text" name='userCity' id='userCity' placeholder='City' defaultValue={userAddressForm?.userCity || ''}/>
          </div>
          {/* postal code */}
          <div className="profile-data-field">
            <input required type="text" name='userPostalCode' id='userPostalCode' placeholder='Postal Code' defaultValue={userAddressForm?.userPostalCode || ''}/>
          </div>
          {/* phone */}
          <div className="profile-data-field">
            <input required type="number" name='userPhone' id='userPhone' placeholder='Phone' defaultValue={userAddressForm?.userPhone || ''}/>
          </div>
          {/* submit btn */}
          <div className="user-details-submit-btn">
            <button className='btn-buy-black'>save changes</button>
          </div>
        </form>
      </div>


    </div>
  );
}

export default Profile;
