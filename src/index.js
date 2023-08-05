import createPageLayout from "./createLayout";
import addHomeTabContent from "./homeTab";
import addContactTabContent from "./contactTab";
import addMenuTabContent from "./menuTab";
import clearContent from "./clear";

createPageLayout();
addHomeTabContent();

const tabs = document.querySelectorAll('.header > ul > li');

const homeTab = tabs[0];
const menuTab = tabs[1];
const contactTab = tabs[2];

homeTab.addEventListener('click', clearContent);
homeTab.addEventListener('click', addHomeTabContent);

menuTab.addEventListener('click', clearContent);
menuTab.addEventListener('click', addMenuTabContent);

contactTab.addEventListener('click', clearContent);
contactTab.addEventListener('click', addContactTabContent);