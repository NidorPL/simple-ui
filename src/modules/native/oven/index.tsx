interface MenuViewConfig {
  name: string;
  icon: string;
}

export function getMenuView(): MenuViewConfig {
  let newVar = {
    name: "Intelligent Oven",
    icon: "stove",
  };
  return newVar;
}

export default {
  getMenuView,
};
