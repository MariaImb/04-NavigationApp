import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text>Settings Screen</Text>
      <PrimaryButton
        label="Regresar"
        onPress={() => {
          navigator.goBack();
        }}></PrimaryButton>
              <PrimaryButton
        label="Regresar al Home"
        onPress={() => {
          navigator.dispatch(StackActions.popToTop());
        }}></PrimaryButton>
    </View>
  );
};
