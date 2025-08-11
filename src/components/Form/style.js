import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxPage: {
        margin: 30,
        marginTop: 25
    },
    boxForm: {
        padding: 34,
        paddingTop: 25,
        paddingHorizontal: 30,
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        elevation: 5,  // só Android
        justifyContent: "center"
    },
    label: {
        fontFamily:"Montserrat_500Medium",
        fontSize: 15,
        color: "#21374B",
        marginTop: 10,
        marginBottom: 4
    },
    input: {
        padding: 14,
        paddingHorizontal: 20,
        backgroundColor: "#F3F4F6",
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 14,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        elevation: 5,  // só Android
        justifyContent: "center",
        // marginBottom: 20
    },
    button: {
        marginTop: 16,
        padding: 13,
        marginBottom: 8,
        backgroundColor: "#6AA695",
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "rgba(0, 0, 0)",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 4,
        elevation: 4,
    },
    buttonText: {
        color: '#fff',
        textTransform: "uppercase",
        fontFamily:"Montserrat_600SemiBold",
        fontSize: 16.5,
        textAlign: "center",
        letterSpacing: 0.1
    },
    errorMessage: {
        fontFamily:"Montserrat_500Medium_Italic",
        fontSize: 10.5,
        color: "#A61B1B",
        padding: 6.5,
        paddingLeft: 0,
        marginBottom: 0
    }
});

export default styles;