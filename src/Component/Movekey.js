import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Gamebutton from './Gamebutton'

const Movekey = () => {
  const [ dir, setDir ] = useState(0);
  return (
    <View style={{alignItems:'center'}}>
      <Text style={{fontSize:30,margin:10}}>{dir}</Text>
      <Gamebutton title='ㅗ' onPress={()=>setDir("ㅗ")}/>
      <Gamebutton title='ㅜ' onPress={()=>setDir("ㅜ")}/>
      <Gamebutton title='<' onPress={()=>setDir("<")}/>
      <Gamebutton title='>' onPress={()=>setDir(">")}/>
    </View>
  )
}

export default Movekey