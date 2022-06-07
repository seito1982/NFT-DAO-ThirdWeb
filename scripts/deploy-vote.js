import sdk from "./initialize-sdk.js";

(async () => {
  try {
    //- 0x09fE8B308F78bE6aAB795f6d51622326239be84E
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "SLR Dao's Proposals",
      voting_token_address: "0xa0E3df5969ba5C424a59A2395A8fc804C47b64c4"/*0x6eefd78C9C73505AA71A13FeE31D9718775c9086*/,
      voting_delay_in_blocks: 0,
      voting_period_in_blocks: 6570,
      voting_quorum_fraction: 0,
      proposal_token_threshold: 0,
    });
    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress
    );
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();
