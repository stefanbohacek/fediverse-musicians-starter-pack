import fetch from "node-fetch";

export default async (username, domain) => {
  let resp, account;
  resp = await fetch(
    `https://${domain}/api/v1/accounts/lookup?acct=${username}@${domain}`
  );

  if (resp.status !== 200) {
    resp = await fetch(`https://${domain}/api/v1/accounts/${username}`);
    account = await resp.json();
  } else {
    account = await resp.json();
  }

  return account;
};
