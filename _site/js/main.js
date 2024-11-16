import onReady from "./modules/onReady.js";
import backToTop from "./modules/backToTop.js";
import updateLinks from "./modules/updateLinks.js";

onReady(() => {
  backToTop();
  updateLinks();
});
