import { AddressZero } from "@ethersproject/constants";
import sdk from "./initialize-sdk.js";

(async () => {
  try {
    //- 0xa0E3df5969ba5C424a59A2395A8fc804C47b64c4
    const tokenAddress = await sdk.deployer.deployToken({
      name: "Seito LogRocket Token", // name of the token
      symbol: "SLR", // symbol
      primary_sale_recipient: AddressZero, // 0x0000000000000000000000000000000000000000
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenAddress
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
