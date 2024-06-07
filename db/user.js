export default class User {
    constructor(
        id,
        name,
        photo,
        email,
        password,
        created
    ) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.email = email;
        this.password = password;
        this.created = created;
    }
}