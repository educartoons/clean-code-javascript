class ProfileManager {
  constructor(user) {
    this.user = user;
    this.profileUrl = "";
    this.username = "";
    this.domain = "http://eduarruben.com/";
  }
  createUsername() {
    let random = Math.floor(Math.random() * 100000);
    this.username = `${this.user.firstName}.${this.user.lastName}.${random}`;
  }
  createProfileUrl() {
    this.this.profileUrl = `${this.domain}${this.username}`;
  }
}

let user = {
  id: 7685,
  firstName: "Eduar",
  lastName: "Apaza"
};

let manager = new ProfileManager(user);
manager.createUsername;
manager.createProfileUrl;
