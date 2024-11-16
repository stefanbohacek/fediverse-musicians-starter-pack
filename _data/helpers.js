module.exports = {
  getLinkActiveState(itemUrl, pageUrl) {
    let response = "";

    if (itemUrl === pageUrl) {
      response = 'class="nav-link link-secondary active fw-bold" aria-current="page"';
    } else {
      response = 'class="nav-link link-secondary"';
    }

    return response;
  },
  getProjectSourceURL() {
    return `https://glitch.com/edit/#!/${process.env.PROJECT_DOMAIN}`;
  },
  getProjectEditURL() {
    return `https://glitch.com/edit/#!/${process.env.PROJECT_DOMAIN}`;
  },
};
