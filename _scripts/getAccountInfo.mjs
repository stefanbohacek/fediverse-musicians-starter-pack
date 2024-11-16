import fetch from "node-fetch";
import getWellKnownData from "./getWellKnownData.mjs";
import lookUpAccount from "./lookUpAccount.mjs";

export default async (account) => {
  console.log(`loading account infor for ${account}...` );
  const accountInfo = account.split("@").filter((item) => item.length);
  const username = accountInfo[0];
  const domain = accountInfo[1];

  let accountData = await lookUpAccount(username, domain);
  const wellKnownData = await getWellKnownData(username, domain);

  let followers = [];
  let following = [];

  accountData._domain = domain;
  accountData._wellKnown = wellKnownData;
  accountData._followers = followers;
  accountData._following = following;
  return accountData;
};
