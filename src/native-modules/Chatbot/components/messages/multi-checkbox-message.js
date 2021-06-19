import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Switch } from "react-native";
import { ChatMessageContext } from "../../context/chat-message-context";

export default function MultiCheckboxMessage() {
  const { message, sendLinkedRequest } = useContext(ChatMessageContext);

  const { options } = message;
  const [selectedOptions, setSelectedOptions] = useState({});

  const sendSelectedOptions = async () => {
    let flattedOptions = "";
    for (const option in selectedOptions) {
      if (!!option) {
        flattedOptions += flattedOptions === "" ? option : `,${option}`;
      }
    }

    await sendLinkedRequest({ selectedOptions: flattedOptions });
  };

  return (
    <MessageContainer>
      {options.map((option, index) => {
        return (
          <Option
            key={"checkbox_option" + index}
            option={option}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        );
      })}
      <SendButton title={"Auswahl bestätigen"} onPress={sendSelectedOptions} />
    </MessageContainer>
  );
}

function Option({ option, selectedOptions, setSelectedOptions }) {
  const [isChecked, setChecked] = React.useState(false);

  const toggleSwitch = (isSelected) => {
    setChecked(isSelected);

    setSelectedOptions({
      ...selectedOptions,
      [option]: isSelected,
    });
  };
  return (
    <OptionContainer>
      <Switch
        value={isChecked}
        onValueChange={toggleSwitch}
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
