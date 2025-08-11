import { Text, View, TouchableOpacity, Share } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";

export default function ResultImc(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: `📊 Meu IMC hoje é: ${props.resultImc}`
        });
    };

    return(
        <View style={styles.boxResult}>
            <Text style={styles.resultMessage}>{props.messageResultImc}</Text>
            {props.resultImc ? (
                <>
                    <Text style={styles.resultNumber}>
                        {props.resultImc}
                    </Text>
                    <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                        <Ionicons name="share-social" size={20} color="#fff" />
                        <Text style={styles.shareButtonText}>Compartilhar</Text>
                    </TouchableOpacity>
                </>
            ) : null}
        </View>
    );
}