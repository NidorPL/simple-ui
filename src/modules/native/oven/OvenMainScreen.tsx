import React, { Fragment, useState, useRef, useEffect } from "react";
import OvenHeader from "./components/OvenHeader";
import { Button, Card, Title, Paragraph, IconButton } from "react-native-paper";
import { ScrollView, View } from "react-native";

import MainOvenCard from "./components/cards/MainOvenCard";
import AddProgamCard from "../../../components/common/AddProgramCard";
import { ovenPrograms } from "./programs/program-registry";

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
        {ovenPrograms.map(({ View }) => {
          return View({ key: 1 });
        })}

        <AddProgamCard programs={ovenPrograms} />
      </ScrollView>
    </Fragment>
  );
}
