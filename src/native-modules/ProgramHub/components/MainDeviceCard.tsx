import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwitchLabel from "../../../components/common/SwitchLabel";

export default function MainDeviceCard({
  programInfo = {
    deviceName: "",
    iconName: "",
    deviceDescription: "",
  },
  isOn = false,
}: {
  programInfo: {
    deviceName: string;
    iconName: string;
    deviceDescription: string;
  };
  isOn: boolean;
}) {
  const { deviceName, iconName, deviceDescription } = ({} = programInfo);
  return (
    <Card elevation={6}>
      <Card.Title
        title={deviceName}
        left={() => <MaterialCommunityIcons name={iconName} size={40} />}
      />
      <Card.Content>
        <Paragraph>{deviceDescription}</Paragraph>
      </Card.Content>
      <SwitchLabel isOn={isOn} />
    </Card>
  );
}
