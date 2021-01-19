/*
 * @Author: Mr.pz
 * @Date: 2021-01-03 22:44:05
 * @Last Modified by: tiny
 * @Last Modified time: 2021-01-19 23:18:28
 * 推荐页
 */

import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import FlexColumn from 'components/FlexColumn';
import Grid from 'components/Grid/index';
import GridItem from 'components/Grid/gridItem';
import AvatarList from 'components/AvatarList';

interface Iinfo {
  imgSrc: string;
  price: string;
  url: string;
}
interface IAvatar {
  imgSrc: string;
}
const goodsList: Iinfo[] = [
  {
    imgSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
    price: '12.8',
    url: '跳到某个页面',
  },
  {
    imgSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
    price: '13.8',
    url: '跳到某个页面',
  },
  {
    imgSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
    price: '14.8',
    url: '跳到某个页面',
  },
  {
    imgSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
    price: '18.8',
    url: '跳到某个页面',
  },
];

const avatarList: IAvatar[] = [
  {
    imgSrc: '',
  },
  {
    imgSrc: '',
  },
];

export default () => {
  return (
    <ScrollView>
      <FlexColumn
        count={4}
        dataSource={[
          {
            imgSrc:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
            text: '天天领红包',
            url: '跳到某个页面',
          },
          {
            imgSrc:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
            text: '天天领红包2',
            url: '跳到某个页面',
          },
          {
            imgSrc:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
            text: '天天领红包3',
            url: '跳到某个页面',
          },
          {
            imgSrc:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
            text: '天天领红包4',
            url: '跳到某个页面',
          },
          {
            imgSrc:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190610%2F17%2F1560159102-EYNsuHBOwd.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612279989&t=202655775905503802227c0d2ca42314',
            text: '天天领红包5',
            url: '跳到某个页面',
          },
        ]}
      />
      <AvatarList avatarList={avatarList} />
      <Grid>
        {goodsList.map((item: Iinfo, index) => {
          return <GridItem info={item} key={index + item.imgSrc} />;
        })}
      </Grid>
    </ScrollView>
  );
};
