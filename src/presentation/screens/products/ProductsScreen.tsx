import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const products = [
  {id: 1, name: 'Producto1'},
  {id: 2, name: 'Producto2'},
  {id: 3, name: 'Producto3'},
  {id: 4, name: 'Producto4'},
  {id: 5, name: 'Producto5'},
  {id: 6, name: 'Producto6'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product' as never)}
            label={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Ajustes"
      />
    </View>
  );
};
