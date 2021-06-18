import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function ChartMessage({ message }) {
  const { fromChatbot, headline, headlineInfo, chartData, showSmall } = message;
  const { labels, data } = chartData;

  const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientTo: "#FFF",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: { borderRadius: 16 },

    propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726" },
  };

  const chartWidth = showSmall
    ? Dimensions.get("window").width * 0.35
    : Dimensions.get("window").width * 0.8;
  const chartHeight = showSmall ? 80 : 220;

  return (
    <ChartMessageWrapper fromChatbot={fromChatbot} showSmall={showSmall}>
      <ChartMessageHeadline>
        <FatText>{headline}</FatText>
        {!showSmall && <FatText>{headlineInfo}</FatText>}
      </ChartMessageHeadline>
      <ChartInfoWrapper>
        <SmallInfoWrapper>
          {showSmall && <FatText showSmall={showSmall}>{headlineInfo}</FatText>}
        </SmallInfoWrapper>

        <StyledLineChart
          data={{ labels, datasets: [{ data }] }}
          width={chartWidth}
          height={chartHeight}
          chartConfig={chartConfig}
          withDots={false}
          withVerticalLabels={!showSmall}
          withHorizontalLabels={!showSmall}
          withVerticalLines={false}
          withHorizontalLines={!showSmall}
          bezier
          showSmall={showSmall}
        />
      </ChartInfoWrapper>
    </ChartMessageWrapper>
  );
}

const ChartMessageWrapper = styled.View`
  background-color: ${(props) => (props.fromChatbot ? "#FFFFFF" : "#1081C4")};
  padding: 10px 0px 10px 0px;
  margin: 5px 50px 15px 15px;

  border-radius: 30px;
  align-self: flex-start;
  width: ${(props) => (props.showSmall ? "40%" : "85%")};
`;

const ChartMessageHeadline = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ChartInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SmallInfoWrapper = styled.View`
  position: relative;
  left: 20px;
  top: 20px;
  z-index: 3;
`;

const FatText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: ${(props) => (props.showSmall ? "17px" : "14px")};
`;

const StyledLineChart = styled(LineChart)`
  position: relative;
  right: ${(props) => (props.showSmall ? "20px" : "3px")};
`;
