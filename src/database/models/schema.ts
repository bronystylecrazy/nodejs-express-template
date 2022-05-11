import { Schema } from "mongoose";
import User from "@/interface/models/User";

const validateEmail = function (email) {
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

export type UserType = "admin" | "user";

export const userSchema = new Schema<User>({
	username: {
		type: String,
		unique: true,
		required: [true, "Enter a username."],
	},
	password: {
		type: String,
		required: [true, "Enter a password."],
		minlength: [4, "Password must be at least 4 characters"],
	},
	email: {
		type: String,
		required: [true, "Enter an email address."],
		validate: [validateEmail, "Please fill a valid email address"],
		unique: true,
	},
	tel: {
		type: String,
		required: [true, "Enter a phone number."],
		minLength: [10, "Phone number should be at least 10 characters"],
		maxlength: [10, "Phone number should be at most 10 characters"],
	},
	type: {
		type: String,
		enum: ["admin", "user"],
		default: "user",
	},
});
