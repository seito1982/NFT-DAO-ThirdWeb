import sdk from "./initialize-sdk.js";

const editionDrop = sdk.getEditionDrop(
  // "0x2f66A5A2BCB272FFC9EB873E3482A539BEB6f02a"
  // "0x069490cfDdE467f4a46Dc392D86c063419658495"
  '0x5aB612f7F170943be517aC9693b57daFc595bA5C'
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Seito_Rocket_DAO", // Name of NFT Collection for DAO
        description: "A DAO for all the LogRocket readers.", // Description
        image:
          "https://cdn.dribbble.com/users/1787323/screenshots/9791845/media/81210e0150e626aa9678b53fc46bffa7.png", // Image for NFT
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
