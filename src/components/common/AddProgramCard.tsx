import {
  Card,
  IconButton,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from "react-native-paper";
import React, { useState } from "react";
import styled from "styled-components/native";
import { ProgramType } from "./types";
import RNPickerSelect from "react-native-picker-select";

export default function AddProgamCard({
  programs,
}: {
  programs: ProgramType[];
}) {
  const [isSelectProgramModalOpen, setIsSelectProgramModalOpen] = useState(
    false
  );

  return (
    <Card>
      <Card.Title title="Programm starten" />
      <Card.Content>
        <ProgramStartContainer>
          <IconButton
            icon="plus-circle"
            size={40}
            onPress={() => setIsSelectProgramModalOpen(true)}
          />
        </ProgramStartContainer>
      </Card.Content>
      <Portal>
        <Dialog
          visible={isSelectProgramModalOpen}
          onDismiss={() => {
            setIsSelectProgramModalOpen(false);
          }}
        >
          <Dialog.Title>Start a new program</Dialog.Title>
          <Dialog.Content>
            <RNPickerSelect
              onValueChange={() => {}}
              items={programs.map((program) => ({
                label: program.info.name,
                value: program.info.name,
              }))}
              placeholder={{ label: "Choose program.." }}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                setIsSelectProgramModalOpen(false);
              }}
            >
              Add Program
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Card>
  );
}

const ProgramStartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
