import { StyleSheet } from "react-native";

const HEADING_COLOR = "#333";
const PRIMARY_COLOR = "244, 81, 30";
const SECONDARY_COLOR = "0, 127, 255";
const TEXT_COLOR = "#666";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 48,
  },
  heading: {
    color: HEADING_COLOR,
    fontSize: 32,
    fontWeight: "bold",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "rgba(0,0,0,0.1)",
    color: TEXT_COLOR,
    width: "100%",
    padding: 16,
  },
  primaryBg: {
    backgroundColor: `rgb(${PRIMARY_COLOR})`,
  },
  primaryColor: {
    color: `rgb(${PRIMARY_COLOR})`,
  },
  subHeading: {
    color: HEADING_COLOR,
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: TEXT_COLOR,
    flexDirection: "row",
    fontSize: 16,
    width: "100%",
  },
  textLink: {
    color: `rgb(${SECONDARY_COLOR})`,
    fontSize: 16,
    width: "100%",
  },
});

export { HEADING_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR };
