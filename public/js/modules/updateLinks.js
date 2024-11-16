const serverInputField = document.getElementById("server");
const accountLinks = [...document.getElementsByClassName("account-link")];

const updateLinksFn = (server) => {
  accountLinks.forEach((link) => {
    link.href = `https://${server}/${link.dataset.username}`;
  });
};

export default () => {
  const savedServer = localStorage.getItem("fediverse-server");

  if (savedServer) {
    serverInputField.value = savedServer;
    updateLinksFn(savedServer);
  }

  serverInputField.addEventListener("input", (event) => {
    const server = event.target.value;
    localStorage.setItem("fediverse-server", server);
    updateLinksFn(server);
  });
};
