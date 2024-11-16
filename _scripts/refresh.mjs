import fs from "fs";
import fetch from "node-fetch";
import sleep from "./sleep.mjs";
import getAccountInfo from "./getAccountInfo.mjs";
import getSignatures from "./getSignatures.mjs";

(async () => {
  const signatures = await getSignatures();
  console.log(signatures);
  if (signatures && signatures.signatures && signatures.signatures.length) {
    const signedAccounts = signatures.signatures.map((signature) =>
      `@${signature.account}@${signature.server}`.toLowerCase()
    );
    console.log("signed accounts:", signedAccounts);

    let accountData = {};
    let csv = "Account address,Show boosts,Notify on new posts,Languages\n";

    const sections = JSON.parse(fs.readFileSync(`./_data/accounts.json`));
    for (let section of sections) {
      for (let account of section.accounts) {
        console.log("account", account);
        if (signedAccounts.includes(account.toLowerCase())) {
          csv += `${account},true,false,\n`;
          try {
            const accountInfo = await getAccountInfo(account);
            const data = {
              username: account,
              name:
                accountInfo.display_name ||
                accountInfo.username ||
                accountInfo.acct ||
                account,
              url: accountInfo.url || accountInfo.uri,
              avatar: accountInfo.avatar_static,
              followers_count: accountInfo.followers_count,
              following_count: accountInfo.following_count,
            };
            console.log(data);
            accountData[account] = data;
            await sleep(1000);
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
    console.log("saving data...");
    fs.writeFileSync(`./_data/data.json`, JSON.stringify(accountData));
    fs.writeFileSync(`./public/starter-pack.csv`, csv);
  } else {
    console.log("no signatures found");
  }
})();
