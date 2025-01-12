import React, {useEffect, useState, memo} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {styles} from './indexCss';
import {PrimaryButton, Scaffold, TextInputBox} from '../../components';
import {Images} from '../../utils/Images';
import {Colors} from '../../utils/Colors';

const SignIn = props => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const onChangeNumber = text => {
    setPhoneNumber(text);
  };

  return (
    <Scaffold containerStyle={styles.container}>
      <Image style={styles.tinyLogo} source={Images.SignIn} />
      <View style={styles.textHeadingContainer}>
        <Text style={styles.headText}>
          India's #1 Food Delivery and Dining App
        </Text>
      </View>
      <View style={styles.loginView}>
        <View style={styles.rowContainer}>
          <View style={styles.barView} />
          <Text style={styles.loginText}>Login in or sign up</Text>
          <View style={styles.barView} />
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <TextInputBox
          onChangeText={onChangeNumber}
          value={phoneNumber}
          placeholder="Enter Phone Number"
          keyboardType="numeric"
        />
        <PrimaryButton
          btnStyle={styles.btnStyle}
          onPress={() => props?.navigation.navigate('BottomTab')}
          title={'Continue'}
        />
      </View>
      <View style={styles.loginView}>
        <View style={styles.rowContainer}>
          <View style={[styles.barView, {width: '45%'}]} />
          <Text style={styles.loginText}> or </Text>
          <View style={[styles.barView, {width: '45%'}]} />
        </View>
      </View>
    </Scaffold>
  );
};

export default memo(SignIn);
