import React from 'react'
import { TouchableOpacity,Text } from 'react-native'

const EventPress = () => {
  const _onPressIn = () => console.log('press In');
  const _onPressOut = () => console.log('press Out');
  const _onPress = () => console.log('press');
  const _onLongPress = () => console.log('Long press');
  return (
    <TouchableOpacity style={{position:'relative',backgroundColor:'green',padding:15,margin:10,borderRadius:10,width:300,height:200}} 
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      onPress={_onPress}
      onLongPress={_onLongPress}
      delayLongPress={3000}
    >
      <Text style={{position:"absolute",top:'50%',left:'50%',transform:'transition()',fontSize:30,textAlign:'center'}}>터치미</Text>
    </TouchableOpacity>
  )
}

export default EventPress