interface MenuViewConfig {
  name: string;
  icon: string;
}

export function getMenuView(): MenuViewConfig {
  return {
    name: "Corona Chatbot",
    icon: "robot",
  };
}

export function getDetailView() {}

export default {
  getMenuView,
};
