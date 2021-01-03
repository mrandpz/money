/*
 * @Author: Mr.pz
 * @Date: 2021-01-03 22:44:05
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-03 23:40:15
 * 推荐页
 */

import * as React from 'react';
import {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import FlexColumn from 'components/FlexColumn';

export interface DataSource {
  imgSrc: string;
  text: string;
  url: string;
}

export default () => {
  return (
    <ScrollView>
      <FlexColumn
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
        ]}
      />
    </ScrollView>
  );
};
