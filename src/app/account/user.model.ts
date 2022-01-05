export class User {
  public static _emptyUser = new User("", "", "");

  constructor(private _username: string,
              private _email: string,
              private _token: string) {
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get emptyUser(): User {
    return User._emptyUser;
  }
}
