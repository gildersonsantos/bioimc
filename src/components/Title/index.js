import { View, Text } from "react-native";
import styles from "./style";

export default function Title() {
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
                Bio<Text style={styles.highlight}>IMC</Text>
            </Text>
        </View>
    );
}