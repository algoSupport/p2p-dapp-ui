import { useEffect, useState } from "react";
import { getSecret } from "../helpers";
import { keccak256 } from "ethers";

export const useVerify = () => {
  const [verified, SetVerified] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const hashedCode = localStorage.getItem('secret') as string ?? ""

      if (hashedCode) {
        getSecret().then(secret => {
          SetVerified(keccak256(hashedCode) === secret)
        })
      } else SetVerified(false)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return verified;
}
