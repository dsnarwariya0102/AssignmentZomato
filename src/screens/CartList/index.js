import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {PrimaryButton, Scaffold} from '../../components';
import {Colors} from '../../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {deleteItem} from '../../reducer/slices/cartSlice';

const CartList = props => {
  const dispatch = useDispatch();

  const cartList = useSelector(state => state.cart);

  const handleDelete = id => {
    dispatch(deleteItem(id));
  };

  const handleBack = () => {
    props?.navigation.goBack();
  };

  return (
    <Scaffold>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back" size={30} color={Colors?.TextGrey} />
        </TouchableOpacity>
      </View>
      <ScrollView containerStyle={styles.scrollView}>
        {cartList?.map((item, index) => {
          const {image, name, rating, serving, product_id} = item;
          return (
            <View key={index} style={styles.cardContainer}>
              <Image style={styles.tinyLogo} source={{uri: image}} />
              <View style={{paddingHorizontal: 10}}>
                <Text>{name}</Text>
                <Text>ratings:{rating}</Text>
                <PrimaryButton
                  btnStyle={{margin: 5, width: '80%', alignSelf: 'center'}}
                  title={'Delete'}
                  onPress={() => {
                    handleDelete(product_id);
                  }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </Scaffold>
  );
};

export default memo(CartList);

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: '100%',
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    height: 200,
    borderWidth: 1,
    borderColor: Colors?.TextGrey,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
