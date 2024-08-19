import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'Producto1'},
  {id: 2, name: 'Producto2'},
  {id: 3, name: 'Producto3'},
  {id: 4, name: 'Producto4'},
  {id: 5, name: 'Producto5'},
  {id: 6, name: 'Producto6'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
              })
            }
            label={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Ajustes"
      />
    </View>
  );
};
