import { ImageRating } from "./image-rating";

export interface MethodCall {
  xml: string;
}

function convertToXmlRpcArray(collection: Array<string>): string {
  const arrayValues = collection.reduce(
    (accumulator, nextStringValue) =>
      accumulator + `<value><string>${nextStringValue}</string></value>`,
    ""
  );

  return `<array><data>${arrayValues}</data></array>`;
}

export class ExistsMethodCall implements MethodCall {
  constructor(public emailHashes: string[], public password: string) {}

  public get xml(): string {
    return `<methodCall>
              <methodName>grav.exists</methodName>
              <params>
                <param><value><struct>
                  <member>
                    <name>hashes</name>
                    <value>
                      ${convertToXmlRpcArray(this.emailHashes)}
                    </value>
                  </member>
                  <member>
                    <name>password</name>
                    <value>
                      <string>${this.password}</string>
                    </value>
                  </member>
                </struct></value></param>
              </params>
            </methodCall>`;
  }
}

export class AddressesMethodCall implements MethodCall {
  constructor(public password: string) {}

  public get xml(): string {
    return `<methodCall>
            <methodName>grav.addresses</methodName>
            <params>
                <param>
                    <value>
                        <struct>
                            <member>
                                <name>password</name>
                                <value>
                                    <string>${this.password}</string>
                                </value>
                            </member>
                        </struct>
                    </value>
                </param>
            </params>
        </methodCall>`;
  }
}

export class SaveDataMethodCall implements MethodCall {
  constructor(
    public imageData: string,
    public imageRating: ImageRating,
    public password: string
  ) {}

  public get xml(): string {
    return `<methodCall>
              <methodName>grav.saveData</methodName>
              <params>
                  <param>
                      <value>
                          <struct>
                              <member>
                                  <name>data</name>
                                  <value>
                                      <string>${this.imageData}</string>
                                  </value>
                              </member>
                              <member>
                                  <name>rating</name>
                                  <value>
                                      <int>${this.imageRating}</int>
                                  </value>
                              </member>
                              <member>
                                  <name>password</name>
                                  <value>
                                      <string>${this.password}</string>
                                  </value>
                              </member>
                          </struct>
                      </value>
                  </param>
              </params>
          </methodCall>`;
  }
}

export class SaveImageMethodCall implements MethodCall {
  constructor(
    public imageUrl: string,
    public imageRating: ImageRating,
    public password: string
  ) {}

  public get xml(): string {
    return `<methodCall>
                <methodName>grav.saveUrl</methodName>
                <params>
                    <param>
                        <value>
                            <struct>
                                <member>
                                    <name>url</name>
                                    <value>
                                        <string>${this.imageUrl}</string>
                                    </value>
                                </member>
                                <member>
                                    <name>rating</name>
                                    <value>
                                        <int>${Number(this.imageRating)}</int>
                                    </value>
                                </member>
                                <member>
                                    <name>password</name>
                                    <value>
                                        <string>${this.password}</string>
                                    </value>
                                </member>
                            </struct>
                        </value>
                    </param>
                </params>
            </methodCall>`;
  }
}

export class UserImagesMethodCall implements MethodCall {
  constructor(public password: string) {}

  public get xml(): string {
    return `<methodCall>
                <methodName>grav.userimages</methodName>
                <params>
                    <param>
                        <value>
                            <struct>
                                <member>
                                    <name>password</name>
                                    <value>
                                        <string>${this.password}</string>
                                    </value>
                                </member>
                            </struct>
                        </value>
                    </param>
                </params>
            </methodCall>`;
  }
}

export class UseUserImageMethodCall implements MethodCall {
  constructor(
    public imageName: string,
    public emailAddresses: Array<string>,
    public password: string
  ) {}

  public get xml(): string {
    return `<methodCall>
                <methodName>grav.useUserimage</methodName>
                <params>
                    <param>
                        <value>
                            <struct>
                                <member>
                                    <name>userimage</name>
                                    <value>
                                        <string>${this.imageName}</string>
                                    </value>
                                </member>
                                <member>
                                    <name>addresses</name>
                                    <value>
                                        ${convertToXmlRpcArray(
                                          this.emailAddresses
                                        )}
                                    </value>
                                </member>
                                <member>
                                    <name>password</name>
                                    <value>
                                        <string>${this.password}</string>
                                    </value>
                                </member>
                            </struct>
                        </value>
                    </param>
                </params>
            </methodCall>`;
  }
}

export class RemoveImageMethodCall implements MethodCall {
  constructor(public emailAddresses: Array<string>, public password: string) {}

  public get xml(): string {
    return `<methodCall>
                <methodName>grav.removeImage</methodName>
                <params>
                    <param>
                        <value>
                            <struct>
                                <member>
                                    <name>addresses</name>
                                    <value>
                                    ${convertToXmlRpcArray(this.emailAddresses)}
                                    </value>
                                </member>
                                <member>
                                    <name>password</name>
                                    <value>
                                        <string>${this.password}</string>
                                    </value>
                                </member>
                            </struct>
                        </value>
                    </param>
                </params>
            </methodCall>`;
  }
}

export class DeleteUserImageMethodCall implements MethodCall {
  constructor(public imageName: string, public password: string) {}

  public get xml(): string {
    return `<methodCall>
                <methodName>grav.deleteUserimage</methodName>
                <params>
                    <param>
                        <value>
                            <struct>
                                <member>
                                    <name>userimage</name>
                                    <value>
                                        <string>${this.imageName}</string>
                                    </value>
                                </member>
                                <member>
                                    <name>password</name>
                                    <value>
                                        <string>${this.password}</string>
                                    </value>
                                </member>
                            </struct>
                        </value>
                    </param>
                </params>
            </methodCall>`;
  }
}

export class TestMethodCall implements MethodCall {
  constructor(public password: string) {}

  public get xml(): string {
    return `<methodCall>
              <methodName>grav.test</methodName>
              <params>
                <param><value><struct>
                  <member>
                    <name>password</name>
                    <value>
                      <string>${this.password}</string>
                    </value>
                  </member>
                </struct></value></param>
              </params>
            </methodCall>`;
  }
}
