import Service from '@ember/service';

export default class SessionService extends Service {
  isAuthenticated = false;
  user = null;

  async authenticate(email, password) {
    if (email === 'admin@example.com' && password === 'password') {
      this.user = { email };
      this.isAuthenticated = true; // ✅ must set this
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
