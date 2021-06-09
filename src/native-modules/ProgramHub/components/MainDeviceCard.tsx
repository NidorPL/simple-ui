import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwitchLabel from "../../../components/common/SwitchLabel";

export default function MainDeviceCard() {
  return (
    <Card>
      <Card.Title
        title="Intelligenter Ofen"
        left={() => <MaterialCommunityIcons name="stove" size={40} />}
      />
      <Card.Content>
        <Paragraph>
          Der intelligente Ofen vereinfacht in praktischer Weise Ihren Alltag.
          Starten Sie vom Wohnzimmmer aus ihren gewünschten Backvorgang oder
          sezten Sie direkt feste Regeln !
        </Paragraph>
      </Card.Content>
      <SwitchLabel />
    </Card>
  );
}
