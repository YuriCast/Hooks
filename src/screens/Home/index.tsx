import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import { styles } from "./styles";


export default function Home(){

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')

    function handleUserAdd(){
        console.log(
            "Nome Completo: " + name + "\nEmail Completo: " + email
        )

        Alert.alert(
            "Nome Completo: " + name + "\nEmail Completo: " + email
        )
    }

    return(
    <View style={styles.container}>
        <Text style={styles.title}>Preencha os Dados</Text>

        <TextInput 
            style={styles.input}
            placeholder="Nome Completo"

            value={ name }
            onChangeText={ setName }
        />
        
        {/* <Text style={styles.txt}>{ name }</Text> */}

        <TextInput 
            style={styles.input}
            placeholder="E-mail"

            value={ email }
            onChangeText={ setEmail }

        />

        <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
            <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
        
    </View>
    )
}