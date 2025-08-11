import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxResult: {
        marginTop: 24,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: "#FFF3CD",
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        elevation: 5,  // só Android
    },
    resultMessage: {
        fontFamily:"Montserrat_600SemiBold",
        fontSize: 11.5,
        textTransform: "uppercase",
        color: "#856404",
        textAlign: "justify",
        letterSpacing: -0.5
    },
    resultNumber: {
        fontFamily:"Montserrat_700Bold",
        fontSize: 50,
        textTransform: "uppercase",
        color: "#21374B",
        textAlign: "justify",
        letterSpacing: -0.5,
    },
    shareButton: {
        flexDirection: "row",       // ícone e texto lado a lado
        alignItems: "center",       // alinhar verticalmente
        backgroundColor: "#1A73E8", // azul padrão (pode trocar)
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20,           // bordas arredondadas
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 8
    },
    shareButtonText: {
        fontFamily:"Montserrat_500Medium",
        fontSize: 13,
        color: "#fff",
        marginLeft: 10 // espaçamento do texto para o ícone
    }
});

export default styles;