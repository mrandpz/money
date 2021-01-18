/*
 * @Author: tiny
 * @Date: 2021-01-18 23:38:20
 * @Last Modified by:   tiny
 * @Last Modified time: 2021-01-18 23:38:20
 */
import * as React from 'react';
import {StyleSheet, View} from 'react-native';

interface IProps {
  children: {};
}

export default (props: IProps) => {
  return <View style={styles.gridWrap}>{props.children}</View>;
};

const styles = StyleSheet.create({
  gridWrap: {
    width: '100%',
    // position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
