interface MenuViewConfig {
  name: string;
  icon: string;
}

export function getMenuView(): MenuViewConfig {
  return {
    name: "Sensors",
    icon: "thermometer",
  };
}

export default {
  getMenuView,
};
