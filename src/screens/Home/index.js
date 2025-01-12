import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {getDataAxios} from '../../utils/ApiConfig';
import {PrimaryButton, Scaffold, TextInputBox} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {Colors} from '../../utils/Colors';
import Shoppingcart from 'react-native-vector-icons/AntDesign';
import {debounce} from '../../utils/CommonUits';
import {addCart} from '../../reducer/slices/cartSlice';

const Home = props => {
  const dispatch = useDispatch();

  const cartList = useSelector(state => state.cart);

  const [FoodList, setFoodList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await getDataAxios('https://dummyjson.com/recipes');
      if (response?.recipes) {
        setFoodList(response?.recipes);
      }
    } catch (e) {
      console.log('Erro', e);
    }
  };

  const setSearch = e => {
    setSearchText(e);
    handleSearch(e);
  };

  const handleSearch = useCallback(
    debounce(searchTerm => {
      onSearch(searchTerm);
    }, 300), // Debounce for 300 milliseconds
    [onSearch],
  );

  // search with debounce
  const onSearch = searchTerm => {
    let data = [...FoodList];
    let filterData = [];

    if (searchTerm?.length > 0) {
      data.map(item => {
        if (item?.name?.includes(searchTerm)) {
          filterData.push(item);
        }
      });

      setFoodList(filterData);
    }
  };

  const handleCart = () => {
    props?.navigation.navigate('CartList');
  };

  const handleAddToCart = item => {
    dispatch(addCart(item));
  };

  const renderItem = ({item, index}) => {
    const {image, name, rating, serving} = item;
    return (
      <View key={index} style={styles.cardStyle}>
        <Image style={styles.tinyLogo} source={{uri: image}} />
        <View style={{paddingHorizontal: 10}}>
          <Text numberOfLines={1}>{name}</Text>
          <Text>Rating: {rating}</Text>
        </View>

        <PrimaryButton
          btnStyle={{margin: 5, width: '80%', alignSelf: 'center'}}
          title={'Add'}
          onPress={() => {
            handleAddToCart(item);
          }}
        />
      </View>
    );
  };

  return (
    <Scaffold containerStyle={{width: '100%'}}>
      <View style={styles.headerContainer}>
        <View style={{width: '90%'}}>
          <TextInputBox
            onChangeText={setSearch}
            value={searchText}
            placeholder={'Search...'}
            keyboardType={'default'}
          />
        </View>

        <TouchableOpacity onPress={handleCart}>
          {cartList?.length !== 0 && (
            <Text style={styles.cartNumber}>{cartList?.length}</Text>
          )}
          <Shoppingcart
            name="shoppingcart"
            size={30}
            color={Colors?.TextGrey}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        containerStyle={styles.container}
        data={FoodList}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item?.userId}
      />
    </Scaffold>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  container: {
    alignItem: 'center',
    justifiyContent: 'center',
    width: '100%',
  },
  cardStyle: {
    height: 300,
    width: '47%',
    borderWidth: 0.5,
    margin: 5,
    color: Colors?.barGrey,
    borderRadius: 10,
  },
  tinyLogo: {
    width: '100%',
    height: '65%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cartNumber: {
    zIndex: 9999,
    position: 'absolute',
    right: 1,
    top: -5,
    color: Colors?.red,
    fontWeight: '700',
  },
});
