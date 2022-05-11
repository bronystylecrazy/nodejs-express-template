import jwt from "jsonwebtoken";

describe("hello", () => {
	it("explain number", () => {
		expect(1).toBe(1);
	});
});

describe("token test", () => {
	it("should return user", () => {
		const user = {
			user_id: "1",
			email: "",
			iat: 0,
			exp: 0,
		};
		const token = jwt.sign(user, "secret");

		expect(token.includes("ey")).toBe(true);
	});
});

export {};
