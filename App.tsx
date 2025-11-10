import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
       <Image 
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGX7CWEaw5Ckg/profile-displayphoto-scale_200_200/B4DZohWIBRIkAY-/0/1761496041549?e=1764201600&v=beta&t=ri3Wiqy2BBXaNZeVeePym4prStnG2GrBkuwkiD4AAyI' }} 
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }} />
        <Text style={styles.nome}>João Ricardo Vieira de Vasconcelos</Text> 
      </View>

       <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estudante de tecnologia apaixonado pela área. Com facilidade de adaptação a novas situações e pessoas, sou organizado, proativo, focado e pontual. Valorizo a comunicação e a colaboração, tanto ao ajudar colegas quanto ao pedir auxílio para resolver desafios.
        </Text>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff', 
    paddingTop: 60,       
    paddingHorizontal: 20, 
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 20,
    color: '#555',
  },
});