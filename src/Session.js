class Session {
  static session = new Session();

  static getInstance() {
    return Session.session;
  }

  constructor() {
    this.currentuser = null;
    this.usertype = 'student';
  }
}

export default Session;
