class Session {
  static session = new Session();

  static getInstance() {
    console.log('Session.getInstance',Session.session);
    return Session.session;
  }

  constructor() {
    this.currentuser = null;
    // this.usertype = 'student';
    this.usertype = '';
  }
}

export default Session;
