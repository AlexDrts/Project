export default class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getProfile() {
    return `${this.name} (${this.email})`;
  }

  changeEmail(email) {
    this.email = email;
  }
}
