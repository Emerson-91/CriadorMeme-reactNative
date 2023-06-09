import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
    this.state = {texto1:'Texto 1 - teste', texto2:'Texto 2'};

    this.escrever = this.escrever.bind(this);
  }
  mudarVogais(texto){
    let novoTexto = texto.toLowerCase();

    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    novoTexto = novoTexto.replace(/(a|á|à|ã|â)/g, 'i');
    novoTexto = novoTexto.replace(/(é|è|ê)/g, 'i');
    novoTexto = novoTexto.replace(/(í|ì)/g, 'i');
    novoTexto = novoTexto.replace(/(ó|ò|ô|õ)/g, 'i'); 
    novoTexto = novoTexto.replace(/(ú|ù|û)/g, 'i');

    return novoTexto;
  }

  escrever(t){
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);

    this.setState(s);
  }

  render(){
  return (
    <View style={styles.body}>
      <View>
      <Text style={styles.titulo}>Criador de Mimimi</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder='Digite seu mimimi' onChangeText={this.escrever}/>
      </View>
      <View style={styles.area}>
        <Text style={[styles.texto, styles.texto1]} > {this.state.texto1.toUpperCase()}</Text>
        <Image style={styles.guri} source={require('./images/mimimi.jpg')}/>
        <Text style={[styles.texto, styles.texto2]}> {this.state.texto2.toUpperCase()}</Text>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  body: {
    paddingTop:30,
    backgroundColor:'#999',
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  titulo:{
    fontSize:30,
    color:'#fff',
    fontWeight:'bold'
  },
  input:{
    borderWidth:1,
    borderColor:'#999',
    backgroundColor:'#eee',
    color:'#000',
    height:40,
    margin:20,
    padding:10
  },
  inputArea:{
    alignSelf:'stretch'
  },
  area:{
    width:300,
    height:300,
    marginTop:10,
  },
  guri:{
    marginTop:-70,
    width:300,
    height:300,
    zIndex:0,
  },
  texto:{
    fontSize:25,
    color:'#fff',
    padding:10,
    backgroundColor:'transparent',
    fontWeight:'bold',
    textAlign:'center',
    height:-70,
  },
  texto1:{
    zIndex:1,
  },
  texto2:{
    zIndex:1,
    marginTop:-70
  },
});
