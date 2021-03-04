import { compile } from "handlebars";
import * as stub from "../TestDoubles/xml-response-stubs";

const faultResponse = compile(stub.faultXml);
const existsResponse = compile(stub.existsXml);
const existsMultipleResponse = compile(stub.existsMultipleXml);
const addressesResponse = compile(stub.addressesXml);
const addressesMultipleResponse = compile(stub.addressesMultipleXml);
const useImageResponse = compile(stub.useUserImageXml);
const useImageMultipleResponse = compile(stub.useUserImageMultipleXml);
const removeImageResponse = compile(stub.removeImageXml);
const removeImageMultipleResponse = compile(stub.removeImageMultipleXml);

function errorResponse(errorMessage: string) {
  return faultResponse({ errorMessage });
}

export function FaultHttpResponse(errorMessage: string) {
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(errorResponse(errorMessage)),
  } as Response);
}

export function BadRequestHttpResponse(errorMessage: string) {
  return Promise.resolve({
    ok: false,
    status: 400,
    statusText: errorMessage,
  } as Response);
}

export function ExistsHttpResponse(emailHash: string) {
  let xml: string = existsResponse({ emailHash });
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(xml),
  } as Response);
}

export function ExistsMultipleHttpResponse(
  emailHash: string,
  email2Hash: string
) {
  let xml: string = existsMultipleResponse({ emailHash, email2Hash });
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(xml),
  } as Response);
}

export function AddressesHttpResponse(email: string) {
  let xml: string = addressesResponse({ email });
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(xml),
  } as Response);
}

export function AddressesMultipleHttpResponse(email1: string, email2: string) {
  let xml: string = addressesMultipleResponse({ email1, email2 });
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(xml),
  } as Response);
}

export function UserImagesNoneHttpResponse() {
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(stub.userImagesNoneXml),
  } as Response);
}

export function UserImageHttpResponse() {
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(stub.userImagesSingleXml),
  } as Response);
}

export function UserImagesHttpResponse() {
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(stub.userImagesXml),
  } as Response);
}

export function SaveImageUrlHttpResponse() {
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(stub.saveImageUrlXml),
  } as Response);
}

export function SaveImageHttpResponse() {
  return SaveImageUrlHttpResponse();
}

export function SaveEncodedImageHttpResponse() {
  return SaveImageUrlHttpResponse();
}

export function UseUserImageHttpResponse(email: string) {
  const xml: string = useImageResponse({ email });
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(xml),
  } as Response);
}

export function UseUserImageMultipleHttpResponse(
  email1: string,
  email2: string
) {
  const xml: string = useImageMultipleResponse({ email1, email2 });
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(xml),
  } as Response);
}

export function RemoveImageHttpResponse(email: string) {
  const xml: string = removeImageResponse({ email });
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(xml),
  } as Response);
}

export function RemoveImageMultipleHttpResponse(
  email1: string,
  email2: string
) {
  const xml: string = removeImageMultipleResponse({ email1, email2 });
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(xml),
  } as Response);
}
export function DeleteUserImageHttpResponse() {
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(stub.deleteUserImageXml),
  } as Response);
}

export function TestHttpResponse() {
  return Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve(stub.testXml),
  } as Response);
}
