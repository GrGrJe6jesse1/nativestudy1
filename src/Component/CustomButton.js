import React from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity style={{backgroundColor:'mint', padding:15, margin:10, borderRadius:7}} onPress={()=> props.onPress()}>
      <Text style={{fontSize:35}}> {props.children || props.title} </Text>
    </TouchableOpacity>
  )
}

CustomButton.defaultProps = {
  title:'move',
  name:'그린'
}
CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  // isRequired 는 필수여부 지정
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default CustomButton