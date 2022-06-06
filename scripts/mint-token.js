import sdk from "./initialize-sdk.js";

const token = sdk.getToken("0xa0E3df5969ba5C424a59A2395A8fc804C47b64c4"/*0x6eefd78C9C73505AA71A13FeE31D9718775c9086*/);

(async () => {
  try {
    const amount = 1_000_000;
    await token.mint(amount); // await token.mint(address, amount)
    const totalSupply = await token.totalSupply();

    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$SLR in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
