import React from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
// import CustomButton from './CustomButton'

const Gamebutton = props => {
  return (
    <TouchableOpacity style={{backgroundColor:'#92b8b1', padding:15, margin:10, borderRadius:7}} onPress={()=> props.onPress()}>
      <Text style={{fontSize:30}}> {props.title} </Text>
    </TouchableOpacity>
  )
}

Gamebutton.defaultProps = {
  title:'move',
}

export default Gamebutton