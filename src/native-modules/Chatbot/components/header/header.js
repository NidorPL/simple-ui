import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";

export function Header({ resetDefaultScreen }) {
  const isWeb = Platform.OS === "web";

  return (
    <HeaderWrapper isWeb={isWeb}>
      <LeftWrapper isWeb={isWeb}>
        <Logo source={require("../../images/Logo_only.png")} />
        <LogoText source={require("../../images/Logo_Text_only.png")} />
      </LeftWrapper>

      <RightWrapperContainer
        onPress={resetDefaultScreen}
        underlayColor="lightgrey"
      >
        <RightWrapper isWeb={isWeb}>
          <RestartImage source={require("../../images/restart-icon.png")} />
          <RestartText>Neu starten</RestartText>
        </RightWrapper>
      </RightWrapperContainer>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: ${(props) => (props.isWeb ? "80px" : "110px")}

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => (props.isWeb ? "0px" : "40px")};
`;

const RightWrapperContainer = styled.TouchableHighlight`
  margin-right: 15px;
  margin-top: 35px;
  border-radius: 5px;
`;

const RightWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => (props.isWeb ? "30px" : "-5px")};
`;

const Logo = styled.Image`
  margin-left: 8px;

  width: 50px;
  height: 60px;
`;

const LogoText = styled.Image`
  margin-left: -3px;
  margin-top: 10px;
  width: 200px;
  height: 20px;
  border-radius: 15px;
`;

const RestartImage = styled.Image`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 15px;
`;

const RestartText = styled.Text`
  font-size: 14px;
  color: #1f3854;
  font-weight: 400;
`;
