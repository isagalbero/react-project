import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLink'
import SignOutLinks from './SignOutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props;
  console.log(profile);
  
  const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">ReactProject</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state.firebase.profile);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)