import Service from '@ember/service';

export default class SessionService extends Service {
  isAuthenticated = false;
  user = null;

  async authenticate(email, password) {
    if (email === 'admin@example.com' && password === 'password') {
      this.isAuthenticated = true;
      this.user = { email };
    } else {
      throw new Error('Invalid credentials');
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.user = null;
  }
}
