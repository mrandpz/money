import {DataSource} from 'page/Recommend';
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface IProps {
  dataSource: DataSource[];
  count: number;
}

export default ({dataSource, count, ...rest}: IProps) => {
  const getColumnPercent = React.useMemo(() => {
    return `${100 / count}%`;
  }, [count]);

  return (
    <View style={styles.container}>
      {dataSource.map((it: DataSource) => {
        return (
          // TODO key 换成后端返回的唯一ID
          <View
            key={it.text}
            style={{...styles.column, ...{width: getColumnPercent}}}
            {...rest}>
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
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  logo: {
    width: 35,
    height: 35,
  },
  column: {
    width: '25%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
