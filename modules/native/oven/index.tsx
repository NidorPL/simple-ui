interface MenuViewConfig {
  name: string;
  icon: string;
}

export function getMenuView(): MenuViewConfig {
  return {
    name: "Intelligent Oven",
    icon: "stove",
  };
}

export default {
  getMenuView,
};
