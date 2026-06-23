export default class Category {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  showInfo() {
    return `${this.title}: ${this.description}`;
  }

  rename(newTitle) {
    this.title = newTitle;
  }
}
