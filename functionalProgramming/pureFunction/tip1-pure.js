class ProfileManager {
  constructor(user) {
    this.user = user;
  }
  createUsername(user) {
    return `${user.firstName}.${user.lastName}.${user.id}`;
  }
  createProfileUrl(domain, username) {
    return `${domain}${username}`;
  }
}

let user = {
  id: 7685,
  firstName: "Eduar",
  lastName: "Apaza"
};

let manager = new ProfileManager(user);
let profileUrl = manager.createProfileUrl(
  "http://eduarruben.com/",
  manager.createUsername(user)
);
