import { Role } from "../common/role-enum";
export interface User {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    role: Role,
    job:any,
    name:any
    updatedAt:any
  }