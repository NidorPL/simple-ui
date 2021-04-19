import React, { Fragment, useState, useRef, useEffect } from "react";
import OvenHeader from "./components/OvenHeader";
import { Button, Card, Title, Paragraph, IconButton } from "react-native-paper";
import { ScrollView, View } from "react-native";
import OvenMainCard from "./components/cards/OvenMainCard";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MainOvenScreen(config: object) {
  // Header

  // Statuse

  // Programme

  // Main controls

  // <Title>Card title</Title>

  return (
    <Fragment>
      <OvenHeader />
      <ScrollView
        contentContainerStyle={{
          display: "grid" as "none",
          gridTemplateColumns: "1fr 1fr",
          gridRowGap: "15px",
          gridColumnGap: "15px",
          padding: 8,
        }}
      >
        <Card>
          <Card.Title title="Main" />
          <Card.Content>
            <Paragraph>
              Der intelligente Ofen vereinfacht in praktischer Weise Ihren
              Alltag. Starten Sie vom Wohnzimmmer aus ihren gewünschten
              Backvorgang oder sezten Sie direkt feste Regeln !
            </Paragraph>
          </Card.Content>
          <OvenMainCard />
        </Card>

        <Card>
          <Card.Title title="Programm starten" />
          <Card.Content>
            <ProgramStartContainer>
              <IconButton
                icon="plus-circle"
                size={40}
                onPress={() => console.log("Pressed")}
              />
            </ProgramStartContainer>
          </Card.Content>
        </Card>
      </ScrollView>
    </Fragment>
  );
}

const ProgramStartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
