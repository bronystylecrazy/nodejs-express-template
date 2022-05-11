import { UserType } from "@/database/models/schema";

export default interface User {
	username: string;
	password: string;
	email: string;
	tel: string;
	type: UserType;
}
