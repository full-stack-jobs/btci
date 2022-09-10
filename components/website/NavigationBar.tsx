import Link from "next/link";

function NavigationBar() {
  return (
    <>
      <div className="navbar-area sticky-top">
        <div className="mobile-nav">
          <Link href="/" className="logo">
            <img src="/assets/img/logo-two.png" alt="Bitcoin Investors" />
          </Link>
        </div>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/">
                <img src="/assets/img/logo.png" alt="Bitcoin Investors" />
              </Link>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pages/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pages/services" className="nav-link">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pages/advisory" className="nav-link">
                      Advisory
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Investments
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Crypto News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="side-nav">
                  <Link href="#">
                    <a className="consultant-btn">Register / Login</a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
