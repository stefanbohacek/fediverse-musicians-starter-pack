import fetch from "node-fetch";

export default async () => {
  const resp = await fetch(
    `https://signatures.stefanbohacek.dev/signatures?url=https://${process.env.PROJECT_DOMAIN}.glitch.me&format=json`
  );

  const signatures = await resp.json();
  return signatures;
};
