import CoronaChatbot from "./modules/chatbot";
import Oven from "./modules/oven";
import Sensors from "./modules/sensor";

const connectedModules = [CoronaChatbot];

export function getDrawerItems() {
  const menuViews = [];
  for (const module of connectedModules) {
    menuViews.push(module.getMenuView());
  }
  return menuViews;
}
