import React, { useState } from "react";
import styled from "styled-components/native";
import { Switch } from "react-native";

export default function SingleCheckboxMessage({ message, sendLinkedRequest }) {
  const { options, linkedRequest } = message;
  const [selectedOption, setSelectedOption] = useState("");

  const sendSelectedOption = async () => {
    const optionIndex = options.findIndex(
      (option) => option === selectedOption
    );
    const link = linkedRequest[optionIndex];

    let flattedOptions = "";
    for (const option in selectedOption) {
      if (!!option) {
        flattedOptions += flattedOptions === "" ? option : `,${option}`;
      }
    }

    console.log("pressed");
    console.log(link);
    await sendLinkedRequest(link);
  };

  return (
    <MessageContainer>
      {options.map((option, index) => {
        return (
          <Option
            key={"checkbox_option" + index}
            option={option}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      })}
      <SendButton title={"Auswahl bestätigen"} onPress={sendSelectedOption} />
    </MessageContainer>
  );
}

function Option({ option, selectedOption, setSelectedOption }) {
  return (
    <OptionContainer>
      <Switch
        value={selectedOption === option}
        onValueChange={() => setSelectedOption(option)}
        ios_backgroundColor="#0E81C4"
        trackColor={{ false: "#767577", true: "#99C6E2" }}
      />
      <ChoiceText>{option}</ChoiceText>
    </OptionContainer>
  );
}

const MessageContainer = styled.View`
  display: flex;
  background-color: #ffffff;

  padding: 2px 0px 10px 0px;
  margin: 5px 50px 15px 15px;
  align-items: center;
  align-self: flex-start;
  border-radius: 15px;

  width: 85%;
`;

const OptionContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
  margin-left: 38px;
`;

const ChoiceText = styled.Text`
  color: black;
  padding: 0px 10px 5px;
  font-weight: 500;
  margin-left: 10px;
`;

const SendButton = styled.Button`
  background-color: #0e81c4;
  width: 90%;
  padding: 7px;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  color: white;
`;
