/*
 * @Author: tiny
 * @Date: 2021-01-18 23:37:30
 * @Last Modified by: tiny
 * @Last Modified time: 2021-01-18 23:38:07
 */
import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

interface Iinfo {
  imgSrc: string;
  price: string;
  url: string;
}
interface IProps {
  info: Iinfo;
}

export default ({info}: IProps) => {
  return (
    <View style={styles.gridItemWrap}>
      <View style={styles.gridItemContent}>
        {info.imgSrc && (
          <Image style={styles.gridItemImg} source={{uri: info.imgSrc}} />
        )}
        <View style={styles.gridItemTextWrap}>
          <View style={styles.gridItemBtnWrap}>
            <Text style={styles.gridItemBtnText}>用券立减</Text>
          </View>
          <Text style={styles.gridItemPrice}>¥{info.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItemWrap: {
    // position: 'relative',
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  gridItemContent: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  gridItemImg: {
    width: '100%',
    height: 100,
  },
  gridItemTextWrap: {
    width: '100%',
    height: 60,
    position: 'relative',
  },
  gridItemBtnWrap: {
    // width: '80%',
    height: 24,
    paddingHorizontal: 5,
    paddingVertical: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    top: -10,
    backgroundColor: '#f55',
    borderRadius: 10,
  },
  gridItemBtnText: {
    lineHeight: 20,
    textAlign: 'center',
    color: '#fff',
  },
  gridItemPrice: {
    textAlign: 'center',
    height: 60,
    lineHeight: 60,
  },
});
