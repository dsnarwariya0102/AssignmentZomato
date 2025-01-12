import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '../../utils/Colors';

const PrimaryButton = props => {
  const {
    onPress = () => {},
    title = 'Title',
    btnStyle = {},
    titleStyle = {},
  } = props;

  return (
    <>
      <TouchableOpacity style={[styles.container, btnStyle]} onPress={onPress}>
        <Text style={[styles.textStyle, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default memo(PrimaryButton);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors?.red,
  },
  textStyle: {
    color: Colors?.white,
    fontWeight: '600',
    fontSize: 16,
  },
});
