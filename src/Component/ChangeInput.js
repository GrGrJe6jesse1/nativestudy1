import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

const ChangeInput = () => {
  const [text, setText] = useState([]);
  const _onChange = event => setText(event.nativeEvent.text);
  return (
    <View>
      <Text>text : {text}</Text>
      <TextInput style={{ borderWidth:1, padding:10, fontSize:20}}
      placeholder='글씨입력' onChange={(_onChange)}/>
    </View>
  )
}

export default ChangeInput