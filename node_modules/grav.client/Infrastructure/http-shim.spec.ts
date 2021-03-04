require("jasmine");
import { HttpShim } from "./http-shim";
import { emailHash } from "../Common/TestDoubles/primitive-stubs";
import { mockHttpRequests } from "../Common/TestDoubles/mock-factory";

mockHttpRequests();

describe("HttpShim", () => {
  let http: HttpShim;

  beforeAll(() => {
    http = new HttpShim(emailHash);
  });

  it("should have endpoint", () => {
    expect(http.endpoint).toBeDefined();
  });
  it("should make rpc call", async () => {
    const response = await http.rpc("");
    expect(response.status).toBe(200);
  });
});
