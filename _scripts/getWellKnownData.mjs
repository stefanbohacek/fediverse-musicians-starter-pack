import fetch from "node-fetch";

export default async (username, domain) => {
  const resp = await fetch(
    `https://${domain}/.well-known/webfinger?resource=acct:${username}@${domain}`
  );
  const wellKnownData = await resp.json();
  return wellKnownData;
};
