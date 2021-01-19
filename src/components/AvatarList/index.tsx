/*
 * @Author: tiny
 * @Date: 2021-01-19 23:20:50
 * @Last Modified by:   tiny
 * @Last Modified time: 2021-01-19 23:20:50
 */
import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface IAvatar {
  imgSrc: string;
}
interface IProps {
  avatarList: IAvatar[];
}
export default ({avatarList}: IProps) => {
  return (
    <View style={styles.avatarWrap}>
      {avatarList.map((item: IAvatar) => {
        return (
          <View style={styles.avatarItem}>
            <Image style={styles.avatar} source={{uri: item.imgSrc || ''}} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrap: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    // width: 100,
    // height: 40,
    borderColor: '#000',
    paddingLeft: 15,
  },
  avatarItem: {
    width: 40,
    height: 40,
    backgroundColor: '#ff0',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 20,
    marginLeft: -14,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});
