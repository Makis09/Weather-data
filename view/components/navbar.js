let Navbar = {
    render: async () => {
      let view = `
               <nav class="navbar">
                  <div class="container">
                          <a class="navbar-brand" href="/#/">
                              <img src="../../assets/logo.png" >
                          </a>
                      <div class="navbar-menu">
                          <ul class="navbar-start">
                            <li><a class="navbar-item" href="${location.hash}"> Home </a></li>
                            <li><a class="navbar-item" href="${location.hash}"> About </a></li>
                            <li><a class="navbar-item" href="${location.hash}"> Contact </a></li>
                          </ul>
                          <div class="navbar-end">
                              <div class="navbar-item">
                                  <ul>
                                      <li><a href="${location.hash}">
                                          <strong>Sign up</strong>
                                      </a></li>
                                      <li><a href="${location.hash}">
                                          <strong>Log in</strong>
                                      </a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </nav>
          `;
      return view;
    }
  };
  
  export default Navbar;
  