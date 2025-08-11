import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxTitle: {
        marginTop: 74,
        alignItems: "center",
        justifyContent: "center"
    },
    textTitle: {
        fontFamily:"Montserrat_300Light",
        fontSize: 53,
        color: "#21374B",
        letterSpacing: -4,
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 6
    },
    highlight: {
        fontFamily:"Montserrat_600SemiBold",
        fontSize: 60,
        color: "#0D0D0D",
    }
});

export default styles;