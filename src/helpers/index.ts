import { keccak256 } from "ethers"
import { tokenUrl } from "../constants"

export const getSecret = () => {
  return fetch(tokenUrl).then(response => response.text())
}

export const verify = async (code: string) => {
  const secret = await getSecret()
  return keccak256(keccak256(new TextEncoder().encode(code))) === secret
}