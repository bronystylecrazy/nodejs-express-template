import User from "@/interface/models/User";
import mongoose from "mongoose";

import { userSchema } from "./schema";

export const User = mongoose.model<User>("User", userSchema, "users");
