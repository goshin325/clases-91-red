import { StatusBar } from 'expo-status-bar';
import { read } from 'package';
import { StyleSheet, Text, View ,Button,Image} from 'react-native';
import  image  from 'assets/funko goku.jpg'
export default function Sony() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> SHARE ART</Text>
      <StatusBar style="auto" />
     <Image source={image}>

     </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8d85',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  button_style:{
  borderRadius:50,
  backgroundColor:"maroon",
  borderColor:"Dark red",
  borderWidth:2,
  height:30,
  width:30
  },

  titleText:{
   color: "white",
   fontWeight:"bold",
   fontSize: 44,
  fontFamily:'AppleSDGothicNeo-Regular'
  },

  title_but:{
    fontSize:15,
    fontFamily:'AppleSDGothicNeo-Regular',
    fontWeight:'bold'
  }

});
