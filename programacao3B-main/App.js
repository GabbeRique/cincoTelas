import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Avatar
        size={64}
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        containerStyle={{ backgroundColor: '#6733b9' }}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu email" />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lista de contatos')}>
        <Text style={styles.buttonText}>Se Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>Se Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder="Digite seu Nome" />
      <Text style={styles.label}>Cpf</Text>
      <TextInput style={styles.input} placeholder="Digite seu Cpf" />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu Email" />
      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} placeholder="Digite seu Senha" />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}



function Login2Screen({ navigation }) {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'João Silva', phone: '(11) 99999-9999', email: 'joao.silva@gmail.com' },
    { id: '2', name: 'Maria Souza', phone: '(11) 88888-8888', email: 'maria.souza@gmail.com' },
    { id: '3', name: 'Carlos Oliveira', phone: '(11) 77777-7777', email: 'carlos.oliveira@gmail.com' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.contactItem}
      onPress={() => navigation.navigate('Alterar contato', { contact: item })}
    >
      <Avatar
        size={64}
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        containerStyle={{ backgroundColor: '#6733b9' }}
      />
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.contactList}
      />
    </View>
  );
}



function EsqueciSenhaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder="Digite seu Nome" />
      
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu Email" />
      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} placeholder="Digite seu Telefone" />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lista de contatos')}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      
    </View>
  );
}
function AlterContatoScreen({ route, navigation }) {
  const { contact } = route.params || {};
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu Nome" 
        defaultValue={contact?.name || ''}
      />
      
      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu Email" 
        defaultValue={contact?.email || ''}
      />
      
      <Text style={styles.label}>Telefone</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu Telefone" 
        defaultValue={contact?.phone || ''}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lista de contatos')}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lista de contatos')}>
        <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitleAlign: 'center',
            headerRight: () => (
              <Ionicons
                name="notifications-outline"
                size={30}
                color="black"
                style={{ marginRight: 10 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{
            headerTitleAlign: 'center',
            headerRight: () => (
              <Ionicons
                name="notifications-outline"
                size={30}
                color="black"
                style={{ marginRight: 10 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Cadastro de contato"
          component={EsqueciSenhaScreen}
          options={{
            headerTitleAlign: 'center',
            headerRight: () => (
              <Ionicons
                name="notifications"
                size={30}
                color="black"
                style={{ marginRight: 10 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Alterar contato"
          component={AlterContatoScreen}
          options={{
            headerTitleAlign: 'center',
            headerRight: () => (
              <Ionicons
                name="notifications"
                size={30}
                color="black"
                style={{ marginRight: 10 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Lista de contatos"
          component={Login2Screen}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cadastro de contato')}>
                <Ionicons
                  name="add-circle"
                  size={30}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  contactList: {
    width: '100%',
    paddingHorizontal: 20,
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10, paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default App;
// npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated @expo/vector-icons