const labels = [
  "Label 1",
  "Label 2",
  "Label 3",
  "Label 4",
  "Label 5",
  "Label 6",
];

const data = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
];

export const showcaseMessages = [
  {
    type: "single-checkbox-message",
    options: [
      "TrockenerHusten",
      "Fieber",
      "Atembeschwerden",
      "Abgeschlagenheit",
      "Keine",
    ],
    linkedRequest: [
      "chatbot?request=1",
      "chatbot?request=2",
      "chatbot?request=3",
      "chatbot?request=4",
      "chatbot?request=5",
    ],
  },
  {
    type: "chart-message",
    headline: "Infizierte Deutschland",
    headlineInfo: "107.663",
    chartData: { labels, data },
    fromChatbot: true,
    showSmall: true,
    linkedRequest: "image-test",
  },
  // {
  //   type: "germany-map-message",
  //   selectedState: "Berlin",
  //   stateColor: "red",
  // },
];
