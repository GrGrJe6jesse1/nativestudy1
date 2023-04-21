import React from 'react'
import { Text, View, Button } from 'react-native';
// import CustomButton from './Component/CustomButton'
// import PressHit from './Component/PressHit'
// import Movekey from './Component/Movekey';
// import Gamebutton from './Component/Gamebutton'
// import EventPress from './Component/EventPress'
import ChangeInput from './Component/ChangeInput'

const App = () => {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', background:'#34189a', fontSize:'50'}}>
      <Text style={{fontSize:35, marginBottom:15}}>버튼 테스트</Text>
      {/* <Movekey/> */}
      {/* <EventPress/> */}
      <ChangeInput/>

      {/* <PressHit/> */}
      {/* <Button title='난 버튼' onPress={()=> alert('터치!!')}></Button> */}
      {/* <CustomButton title='move' />
      <CustomButton title='action'>second btn</CustomButton>
      <CustomButton/> */}
    </View>
  )
}

export default App