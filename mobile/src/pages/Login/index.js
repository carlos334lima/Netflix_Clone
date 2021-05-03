import React, { useState, useCallback } from "react";

/* import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native'; */
import { Text, View, Image, ActivityIndicator } from "react-native";
import { TextInput, Button } from "react-native-paper";

import api from "../../services/api";

import styles from "./styles";

const Login = () => {
  const [credenciais, setCredenciais] = useState({
    email: "",
    senha: "",
  });

  return (
    <View style={styles.bgDark}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <View>
        <TextInput
          mode="flat"
          style={styles.marginBottom}
          label="Email ou Número de Telefone"
          value={credenciais.email}
          onChangeText={(text) =>
            setCredenciais({ ...credenciais, email: text })
          }
        />

        <TextInput
          style={styles.marginBottom}
          mode="flat"
          label="Senha"
          secureTextEntry
          value={credenciais.senha}
          onChangeText={(text) =>
            setCredenciais({ ...credenciais, senha: text })
          }
        />

        <Button mode="contained" style={styles.marginBottom} onPress={() => {}}>
          Entrar
        </Button>

        <Button 
          style={styles.marginBottom} 
          onPress={() => {}}
          theme={{ colors: { primary: "#FFF" } }}
          >
          Recuperar senha
        </Button>

        <Text style={styles.textSmall}>
          {" "}
          O acesso está protegido pelo Google reCAPTCHA para garantir que não é
          um robô. Saiba Mais
        </Text>
      </View>
    </View>
  );
};

export default Login;
