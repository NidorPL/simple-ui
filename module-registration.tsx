import CoronaChatbot from "./modules/chatbot";
import Oven from "./modules/oven";
import Sensors from "./modules/sensor";
import config from "./config";

export function getConnectedDevices() {
  return config.connectedDevices;
}

export function getConnectionUrl(deviceName: string) {
  const selectedDevice = config.connectedDevices.find(
    (device) => device.name === deviceName
  );
  return selectedDevice.connection.url;
}
