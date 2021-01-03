import {DataSource} from 'page/Recommend';
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface IProps {
  dataSource: DataSource[];
}

export default ({dataSource}: IProps) => {
  return (
    <View style={styles.container}>
      {dataSource.map((it: DataSource) => {
        return (
          // TODO key 换成后端返回的唯一ID
          <View key={it.text} style={styles.column}>
            <Image
              style={styles.logo}
              source={{
                uri: it.imgSrc,
              }}
            />
            <Text>{it.text}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#eaeaea',
    flexDirection: 'row',
  },
  logo: {
    width: 35,
    height: 35,
  },
  column: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
