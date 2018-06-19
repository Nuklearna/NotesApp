import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class Main extends Component{
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity style={styles.noteDelete} onPress={this.props.deleteMethod}>
            <Text style={styles.noteDeleteText}>Del</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
   position: 'relative',
   padding: 20,
   paddingRight: 100,
   borderBottomWidth: 1,
   borderBottomColor: '#ededed'
  },
  noteText: {
   paddingLeft: 20,
   borderLeftWidth: 10,
   borderLeftColor: '#7f7fff'
},
noteDelete: {
   position: 'absolute',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#3f3f7f',
   padding: 10,
   top: 10,
   bottom: 10,
   right: 10
},
noteDeleteText: {
   color: '#fff'
},
});
