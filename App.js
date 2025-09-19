import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "./assets/icon_todo_list.png";
import btnAdd from "./assets/btnAdd.png";
import { useState } from "react";
import { FlashList } from "@shopify/flash-list";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const btnAdiconar = () => {
    //Alert.alert("TODO List", "Valor: " + tarefa);
    setTarefas([tarefa, ...tarefas]);
    setTarefa("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.viewItemRender}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo} />
        <Text>TODO List</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Digite a tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={btnAdiconar}>
          <Image source={btnAdd} style={styles.btnAdd} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTarefas}>
        <FlashList
          data={tarefas}
          renderItem={renderItem}
          estimatedItemSize={50}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  logo: {
    height: 128,
    width: 128,
  },
  viewInput: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnAdd: {
    width: 32,
    height: 32,
  },
  viewLogo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  viewTarefas: {
    width: "100%",
    flex: 1,
  },
  viewItemRender: {
    height: 50,
    width: "100%"
  }
});
