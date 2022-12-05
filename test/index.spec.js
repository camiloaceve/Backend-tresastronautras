const app = require("../src/index")
const request = require("supertest")

describe("GET api/usuario/listUser", () => {
	test("debe responder con un código de estado 200", async () => {
		const response = await request(app).get("/api/usuario/listUser").send()
		expect(response.statusCode).toBe(200)
	})
	test("debe responder una matriz", async () => {
		const response = await request(app).get("/api/usuario/listUser").send()
		expect(response.body).toBeInstanceOf(Array)
	})
})
