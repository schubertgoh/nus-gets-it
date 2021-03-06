import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Sidebar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
        <div class="row">
            <ul id="slide-out" class="sidenav sidenav-fixed">
            <li><div class="user-view">
            <a href="#name"><span class="black-text name">Welcome, <b>{user.name.split(" ")[0]}</b></span></a>
            </div></li>
            <li><i class="black-text material-icons prefix">search</i>
            <input type="text" class="black-text" ></input></li>
            <li><a href="/dashboard"><i class="black-text material-icons">home</i><span class="black-text">Home</span></a></li>
            <li><a href="/eventpage"><i class="black-text material-icons">event</i><span class="black-text">Events</span></a></li>
            <li><a href="#!"><i class="black-text material-icons">bookmark_border</i><span class="black-text">Saved</span></a></li>
            <li><div class="divider"></div></li>
            <button
                    style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                    Logout
                </button>
            </ul>
          <div class="col s12 offset-s3">
            <ul class="tabs">
              <li class="tab col s3"><a href="#test1"><span class="black-text">Communities you follow</span></a></li>
              <li class="tab col s3"><a href="#test2"><span class="black-text">Trending Communities</span></a></li>
              <li class="tab col s3"><a href="#test3"><span class="black-text">Explore Communities</span></a></li>             
            </ul>
          </div>   
        </div>
    );
  }
}
Sidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Sidebar);