import { FaultError } from "./fault-error";
import { xml2js } from "xml-js";
import { UserImage } from "./user-image";
import { UserAddress } from "./user-address";

export class MethodResponse {
  constructor(public json: any) {
    let faultCode: number = 0;
    let faultString: string = "";
    const { fault } = this.json ? this.json.methodResponse : { fault: false };
    if (fault) {
      const members: Array<any> = fault.value.struct.member;
      members.map((member) => {
        if (member.name._text == "faultCode") {
          faultCode = Number(this.parseFieldValue(member.value));
        } else if (member.name._text == "faultString") {
          faultString = this.parseFieldValue(member.value);
        }
      });
      throw new FaultError(faultCode, faultString);
    }
  }

  protected parseFieldValue(fieldValue: any): string {
    if (fieldValue.boolean) return fieldValue.boolean._text;
    if (fieldValue.int) return fieldValue.int._text;
    if (fieldValue.string) return fieldValue.string._text;
    return fieldValue._text;
  }
}

const xmlToJson = (xml: string): any => {
  return xml.length ? xml2js(xml, { compact: true }) : false;
};

export class ExistsMethodResponse extends MethodResponse {
  constructor(public xml: string) {
    super(xmlToJson(xml));
    this.parseMembers();
  }

  private _success: boolean;
  public get success(): boolean {
    return this._success;
  }
  public set success(value: boolean) {
    this._success = value;
  }

  public parseMembers() {
    if (this.json && !this.json.methodResponse.fault) {
      let _members = null;
      const { member } = this.json.methodResponse.params.param.value.struct;
      _members = Array.isArray(member) ? member : [member];
      this._success = _members.every((member) => {
        return Number(this.parseFieldValue(member.value)) == 1;
      });
    }
  }
}

export class AddressesMethodResponse extends MethodResponse {
  private _userAddresses: Array<UserAddress>;
  get userAddresses() {
    return this._userAddresses;
  }
  set userAddresses(value) {
    this._userAddresses = value;
  }

  constructor(public xml: string) {
    super(xmlToJson(xml));
    this.parseMembers();
  }

  public parseMembers() {
    if (this.json && !this.json.methodResponse.fault) {
      const { member } = this.json.methodResponse.params.param.value.struct;
      const _members = Array.isArray(member) ? member : [member];
      this.userAddresses = _members.map(this.parseUserAddress.bind(this));
    }
  }

  private parseUserAddress(member: any): UserAddress {
    const address = new UserAddress();
    address.email = this.parseFieldValue(member.name);
    const members: Array<any> = member.value.struct.member;
    members.forEach((member) => {
      switch (member.name._text) {
        case "rating":
          address.imageRating = Number(this.parseFieldValue(member.value));
          break;
        case "userimage":
          address.imageName = this.parseFieldValue(member.value);
          break;
        case "userimage_url":
          address.imageUrl =
            address.imageName && this.parseFieldValue(member.value);
          break;
      }
    });
    return address;
  }
}

export class SaveImageMethodResponse extends MethodResponse {
  public imageName: string;
  constructor(public xml: string) {
    super(xmlToJson(xml));
    this.parseMembers();
  }
  public parseMembers() {
    if (this.json && !this.json.methodResponse.fault) {
      const { value } = this.json.methodResponse.params.param;
      this.imageName = this.parseFieldValue(value);
    }
  }
}

export class UserImagesMethodResponse extends MethodResponse {
  private _userImages: Array<UserImage>;
  public get userImages(): Array<UserImage> {
    return this._userImages;
  }
  public set userImages(value: Array<UserImage>) {
    this._userImages = value;
  }

  constructor(public xml: string) {
    super(xmlToJson(xml));
    this.parseMembers();
  }

  public parseMembers() {
    if (this.json && !this.json.methodResponse.fault) {
      if(this.json.methodResponse.params.param.value.array){
        return this.userImages = [];
      }
      const { member } = this.json.methodResponse.params.param.value.struct;
      const members = Array.isArray(member) ? member : [member];
      const self = this;
      this.userImages = members.map(function (img: any) {
        const userImage = new UserImage();
        userImage.name = self.parseFieldValue(img.name);
        const members: Array<any> = img.value.array.data.value;
        members.forEach(function (member) {
          const memberValue = member.string._text;
          if (isNaN(memberValue)) {
            userImage.url = memberValue;
          } else {
            userImage.rating = Number(memberValue);
          }
        });
        return userImage;
      });
    }
  }
}

export class UseUserImageMethodResponse extends MethodResponse {
  public success: boolean;
  constructor(public xml: string) {
    super(xmlToJson(xml));
    this.parseMembers();
  }
  public parseMembers() {
    if (this.json && !this.json.methodResponse.fault) {
      const { member } = this.json.methodResponse.params.param.value.struct;
      const _members = Array.isArray(member) ? member : [member];
      this.success = _members.every(
        (member) => Number(this.parseFieldValue(member.value)) == 1
      );
    }
  }
}

export class RemoveImageMethodResponse extends MethodResponse {
  public success: boolean;
  constructor(public xml: string) {
    super(xmlToJson(xml));
    this.parseMembers();
  }
  public parseMembers() {
    if (this.json && !this.json.methodResponse.fault) {
      const { member } = this.json.methodResponse.params.param.value.struct;
      const _members = Array.isArray(member) ? member : [member];
      this.success = _members.every(
        (member) => Number(this.parseFieldValue(member.value)) == 1
      );
    }
  }
}

export class DeleteUserImageMethodResponse extends MethodResponse {
  public success: boolean;
  constructor(public xml: string) {
    super(xmlToJson(xml));
    this.parseMembers();
  }
  public parseMembers() {
    if (this.json && !this.json.methodResponse.fault) {
      const { value } = this.json.methodResponse.params.param;
      this.success = Number(this.parseFieldValue(value)) == 1;
    }
  }
}

export class TestMethodResponse extends MethodResponse {
  public response: number;

  constructor(public xml: string) {
    super(xmlToJson(xml));
    this.parseMembers();
  }

  public parseMembers() {
    if (this.json && !this.json.methodResponse.fault) {
      const {
        name,
        value,
      } = this.json.methodResponse.params.param.value.struct.member;
      this.response = Number(this.parseFieldValue(value));
    }
  }
}
