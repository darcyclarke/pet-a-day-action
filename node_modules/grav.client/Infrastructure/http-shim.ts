require("isomorphic-unfetch");

export const origin = "https://secure.gravatar.com";

export class HttpShim {
  public endpoint: string;

  constructor(emailHash: string) {
    this.endpoint = `${origin}/xmlrpc?user=${emailHash}`;
  }

  async rpc(message: string): Promise<Response> {
    return await fetch(this.endpoint, {
      method: "POST",
      headers: { "content-type": "text/xml" },
      body: message,
    });
  }
}
