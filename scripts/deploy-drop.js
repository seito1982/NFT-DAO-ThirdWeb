import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "Seito_Rocket_DAO", // Name of NFT Collection for DAO
      description: "A DAO for all the LogRocket readers.", // Description
      image:
        "https://cdn.dribbble.com/users/1787323/screenshots/9791845/media/81210e0150e626aa9678b53fc46bffa7.png", // PFP for NFT collection
      primary_sale_recipient: ethers.constants.AddressZero,
    });
    //- 0x069490cfDdE467f4a46Dc392D86c063419658495
    //- 0x5aB612f7F170943be517aC9693b57daFc595bA5C

    const editionDrop = sdk.getEditionDrop(editionDropAddress);
    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();
