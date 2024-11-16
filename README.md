# A starter project for making fediverse starter packs with 11ty

This is an **experimental** Glitch starter project that lets you create a simple page for promoting your friends and other popular public fediverse accounts.

It is intended to be used as an alternative to lists created with Google Sheets and similar services, and as such it lacks proper privacy and safety controls as accounts added to the list are not automatically notified when they are added (this is something I am currently exploring for the next version of this project).

As a courtesy, consider checking with everyone before you add them to your list.

## How to use this project

Using this project does not require a paid subscription. You can also follow the steps outlined below without an account to create a temporary project that will be automatically removed after 5 days.

1. Press the "Remix" button to create a copy of this project.
2. On the left side, open the file `_data/site.js` and update your page's title and description, and add yourself as the author.
3. Now go to `_data/accounts.json` and update the list of accounts. Note the format of this file:

```json
[
  {
    "title": "Section 1",
    "avatars": true,
    "accounts": [
      "@account1@musician.social",
      "@account2@ravenation.club",
      "@account3@nham.co.uk"
    ]
  },
  {
    "title": "Section 2",
    "avatars": false,
    "accounts": [
      "@account4@mastodon.social",
      "@account5@mstdn.social",
      "@account6@musicians.today"
    ]
  }
]
```

You can add as many sections and as many accounts as you'd like. Do note that the more accounts you add, the longer it will take to refresh the data. Note that only accounts that add their signature via the "Apply to be added" button will be displayed.

4. Click the TERMINAL button at the bottom of the screen.
5. Run the following code to refresh the account data:

```sh
npm run refresh
```

This should be done after each time you update the list of accounts, or when an account updates their "signature". This is not needed if you are only updating a title of a section.

6. Optionally, you can update the file `content/index.md` using the [Markdown](https://www.markdownguide.org/basic-syntax/) markup language.

## Known issues

- Some accounts hosted on non-standard Mastodon servers may apear blank. Currently looking into this!
- Custom emoji in display names are not shown. (Maybe just remove them for now?)
