import React, { Fragment, useState, useRef, useEffect } from "react";
import OvenHeader from "./components/OvenHeader";
import { Button, Card, Title, Paragraph, IconButton } from "react-native-paper";
import { ScrollView, View } from "react-native";
import SwitchLabel from "../../../components/common/SwitchLabel";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainOvenCard from "./components/cards/MainOvenCard";
import AddProgamCard from "../../../components/common/AddProgramCard";
import OvenBakeProgram from "./programs/bake";

export default function MainOvenScreen(config: object) {
  // Header

  // Statuse

  // Programme

  // Main controls

  // <Title>Card title</Title>

  /*
        Logic here



        Load available programs


     */

  return (
    <Fragment>
      <ScrollView
        contentContainerStyle={{
          display: "grid" as "none",
          gridTemplateColumns: "1fr 1fr",
          gridRowGap: "15px",
          gridColumnGap: "15px",
          padding: 8,
        }}
      >
        <MainOvenCard />
        <OvenBakeProgram />
        <AddProgamCard />
      </ScrollView>
    </Fragment>
  );
}
