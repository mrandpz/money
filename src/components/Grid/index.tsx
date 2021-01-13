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
