// Layout.js
import { Outlet, Link } from "react-router-dom";
import Logo from './images/1.png';

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg border-body" data-bs-theme="dark">

        <div class="container-fluid">
          <div class="col-sm-6 text-center">
            {/* <img class="navbar-brand" id="title" href="index.html" src="https://imgur.com/a/fj7xJnb" height="100%" /> */}
            <img src={Logo} alt="" height="50px" />
          </div>
          <div class="col-sm-6 text-center">

            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item ">
                  <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/About">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
