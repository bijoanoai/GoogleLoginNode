// exports.loginPage = (req, res) => {
//     res.sendFile(path.join(__dirname, '../views/index.html'));
//   };
exports.loginPage = (req, res) => {
    res.send('<h1>Home</h1><a href="/auth/google">Login with Google</a>');
  };
  
  exports.profilePage = (req, res) => {
    if (!req.isAuthenticated()) return res.redirect('/');
    res.send(`<h1>Profile</h1><p>Name: ${req.user.displayName}</p><a href="/logout">Logout</a>`);
  };
  
  exports.logout = (req, res) => {
    req.logout(() => {
      res.redirect('/');
    });
  };
  