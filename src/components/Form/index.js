import { useState } from "react";
import { TouchableOpacity, Text, TextInput, View, Vibration } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

const messages = {
    default: "Preencha o Peso e a Altura.",
    invalid: "Digite valores válidos e maiores que zero.",
    result: "Seu IMC é igual:",
};

export default function Form() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [messageImc, setMessageImc] = useState(messages.default);
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    const [errorHeight, setErrorHeight] = useState("");
    const [errorWeight, setErrorWeight] = useState("");

    function imcCalculator(numericHeight, numericWeight) {
        const result = numericWeight / (numericHeight * numericHeight);
        return result.toFixed(2);
    }
    
    function sanitizeInput(text) {
        return text
            .replace(",", ".")        // troca vírgula por ponto
            .replace(/[^0-9.]/g, ""); // só deixa números e ponto
    }


    function validationImc() {
        const numericHeight = parseFloat(height);
        const numericWeight = parseFloat(weight);
        
        let hasError = false;

        if (!numericHeight || numericHeight <= 0) {
            setErrorHeight("* Campo obrigatório.");
            hasError = true;
        } else {
            setErrorHeight("");
        }
        
        if (!numericWeight || numericWeight <= 0) {
            setErrorWeight("* Campo obrigatório.");
            hasError = true;
        } else {
            setErrorWeight("");
        }
        
        if (hasError) {
            setImc(null);
            setMessageImc(messages.invalid);
            setTextButton("Calcular");
            Vibration.vibrate();
            return;
        }
        
        const result = imcCalculator(numericHeight, numericWeight);
        setImc(result);
        setMessageImc(messages.result);
        setTextButton("Calcular Novamente");
        setHeight("");
        setWeight("");
    }

    return(
        <View style={styles.boxPage}>
            <View style={styles.boxForm}>
                <Text style={styles.label}>Altura</Text>
                <TextInput style={styles.input} onChangeText={(text) => setHeight(sanitizeInput(text))} value={height} placeholder="Ex. 1.75" placeholderTextColor="#999" keyboardType="decimal-pad"/>
                <Text style={styles.errorMessage}>{errorHeight}</Text>

                <Text style={styles.label}>Peso</Text>
                <TextInput style={styles.input} onChangeText={(text) => setWeight(sanitizeInput(text))} value={weight} placeholder="Ex. 75.365" placeholderTextColor="#999" keyboardType="decimal-pad"/>
                <Text style={styles.errorMessage}>{errorWeight}</Text>

                <TouchableOpacity style={styles.button} onPress={() => validationImc()}>
                    <Text style={styles.buttonText}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}