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
    type: "chart-message",
    headline: "Infizierte Deutschland",
    headlineInfo: "107.663",
    chartData: { labels, data },
    fromChatbot: true,
    showSmall: false,
    linkedRequest: "chart-test",
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
    type: "label-data-message",
    label: "Verdopplungszeit Deutschland",
    data: "15 Tage",
    linkedRequest: "label-test",
  },
  {
    type: "spoiler-message",
    headline: "Infos zu Regulierungen",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    type: "germany-map-message",
    selectedState: "Berlin",
    stateColor: "red",
  },
];
