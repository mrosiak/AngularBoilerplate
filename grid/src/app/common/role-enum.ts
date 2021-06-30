export enum Role{
    NoAccess,
    Marketing = 1 << 1,
    Author = 1 << 2,
    Admin = Marketing | Author
}