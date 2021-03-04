import {
  ExistsMethodResponse,
  AddressesMethodResponse,
  UserImagesMethodResponse,
  SaveImageMethodResponse,
  UseUserImageMethodResponse,
  TestMethodResponse,
} from "../../Domain/method-responses";

import * as stub from "./json-response-stubs";
import * as xml from "./xml-response-stubs";

export function ExistsResponse() {
  const response = new ExistsMethodResponse("");
  response.json = stub.existsJsonResponse;
  response.parseMembers();
  response.success = true;
  return Promise.resolve(response);
}

export function AddressesResponse() {
  const response = new AddressesMethodResponse(xml.addressesXml);
  response.json = stub.addressesJsonResponse;
  response.parseMembers();
  return Promise.resolve(response);
}

export function UserImagesResponse() {
  const response = new UserImagesMethodResponse(xml.userImagesXml);
  response.json = stub.userImagesJsonResponse;
  response.parseMembers();
  return Promise.resolve(response);
}

export function UserImagesResponseNoImages() {
  const response = new UserImagesMethodResponse(xml.userImagesNoneXml);
  response.json = stub.userImagesNoneJsonResponse;
  response.parseMembers();
  return Promise.resolve(response);
}

export function UserImagesResponseSingleImage() {
  const response = new UserImagesMethodResponse(xml.userImagesNoneXml);
  response.json = stub.userImagesSingleJsonResponse;
  response.parseMembers();
  return Promise.resolve(response);
}

export function SaveImageResponse() {
  const response = new SaveImageMethodResponse("");
  response.json = stub.saveImageResponse;
  response.parseMembers();
  return Promise.resolve(response);
}

export function UseUserImageResponse() {
  const response = new UseUserImageMethodResponse("");
  response.json = stub.useUserImageJsonResponse;
  response.parseMembers();
  return Promise.resolve(response);
}

export function TestResponse() {
  const response = new TestMethodResponse("");
  response.json = stub.testJsonResponse;
  response.parseMembers();
  return Promise.resolve(response);
}
