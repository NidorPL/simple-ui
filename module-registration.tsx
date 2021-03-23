import CoronaChatbot from "./modules/chatbot";

const connectedModules = [CoronaChatbot];

export function getDrawerItems() {
  const menuViews = [];
  for (const module of connectedModules) {
    menuViews.push(module.getMenuView());
  }
  return menuViews;
}
