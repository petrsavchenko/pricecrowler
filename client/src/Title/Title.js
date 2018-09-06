import React, { Component } from 'react';

class Title extends Component {

  watchIt() {
      const {isAuthenticated, login} = this.props.auth;
      if(!isAuthenticated()){
          login();
      }
  }

  render() {
    return (
        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row mx-auto">
              <div className="col-lg-12 mx-auto">
                {/* {
                  (isAuthenticated()) ? ( <button className="btn btn-danger log" onClick={this.logout.bind(this)}>Log out </button> ) : ( <button className="btn btn-info log" onClick={this.login.bind(this)}>Log In</button> )
                } */}
                <h1 className="text-uppercase mb-4">
                    <strong>Amazon price tracker</strong>
                </h1>
                <input placeholder="Enter Amazon URL" className="form-control form-control-lg" required type="url"/>
                <hr/>
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5">Just create Amazon price watches and get alerts via email when prices drop</p>
                <a className="btn btn-primary btn-xl" onClick={this.watchIt.bind(this)}>Watch it</a>
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default Title;
