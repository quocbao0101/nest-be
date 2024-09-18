export class User {
    id?: number;
    full_name?: string;
    email?: string;
    password?: string
    access_token?: string;

    constructor({ id, full_name, email, password, access_token }) {
        if (id !== null) this.id = id;
        if (full_name !== null) this.full_name = full_name;
        if (email !== null) this.email = email;
        if (password !== null) this.password = password;
        if (access_token !== null) this.access_token = access_token;
    }
}