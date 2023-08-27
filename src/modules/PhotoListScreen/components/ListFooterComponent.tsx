import React from 'react';
import { ActivityIndicator, StyleSheet, View } from "react-native";

import {verticalScale} from '../../../utils';

interface IListFooterProps {
  loading: boolean;
}

export default ({loading}: IListFooterProps) =>
  loading ? <View style={{ height: 300}}><ActivityIndicator style={styles.indicator} size="large" /></View> : null;

const styles = StyleSheet.create({
  indicator: {
    marginVertical: verticalScale(30),
  },
});
