import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '../../utils/Colors';

const TextInputBox = props => {
  const {
    inputStyle = {},
    onChangeText,
    value,
    placeholder = 'Placeholder',
    keyboardType = 'default',
  } = props;

  return (
    <>
      <TextInput
        {...props}
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </>
  );
};

export default memo(TextInputBox);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
    borderColor: Colors?.textBarGrey,
    padding: 15,
  },
});
