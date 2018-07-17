export class User {
  constructor(
    public username: string,
    public name?: string,
    public lastName?: string,
    public birdDate?: string,
    public address?: string,
    public postalCode?: string,
    public contry?: string,
    public _id?: string
  ) { }

  fullName() {
    return `${this.name} ${this.lastName}`;
  }
}
