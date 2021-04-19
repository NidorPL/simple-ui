import React, { Fragment, useState, useRef, useEffect } from "react";
import OvenHeader from "./components/OvenHeader";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { ScrollView, View } from "react-native";
import OvenMainCard from "./components/cards/OvenMainCard";
import styled from "styled-components/native";

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
          gridRowGap: "8px",
          gridColumnGap: "8px",
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
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </Fragment>
  );
}
