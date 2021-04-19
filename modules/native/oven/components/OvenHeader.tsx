import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const isWeb = Platform.OS === "web";

export default function OvenHeader() {
  return (
    <HeaderWrapper isWeb={isWeb}>
      <LeftWrapper isWeb={isWeb}>
        <Logo name="stove" size={40} color="black" />
        <LogoText>Intelligent Oven </LogoText>
      </LeftWrapper>

      <RightWrapperContainer underlayColor="lightgrey">
        <RightWrapper isWeb={isWeb}></RightWrapper>
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

const Logo = styled(MaterialCommunityIcons)`
  margin-left: 8px;
  margin-top: 15px;
  width: 60px;
  height: 60px;
`;

const LogoText = styled.Text`
  font-size: 22px;
  font-family: Arial;
}

// const LogoText = styled.Image`;
//   margin-left: -3px;
//   margin-top: 10px;
//   width: 200px;
//   height: 20px;
//   border-radius: 15px;
// `;
