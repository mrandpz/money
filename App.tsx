import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="update title"
        onPress={() => navigation.setOptions({title: 'Updated title'})}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      {/* 传递参数 */}
      <Button
        title="传递参数"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function PropsScreen({extraData}: any) {
  console.log(extraData);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Props Screen{extraData.a}</Text>
    </View>
  );
}

function NestScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>NestScreen</Text>
    </View>
  );
}

function DetailsScreen({navigation, route}) {
  // 接收参数
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      {/* 接收参数处理 */}
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      {/* 再次点击，可以查看没有参数的时候默认参数 */}
      <Button
        title="Go to Details... again"
        // 在当前页面navigate是不会生效的，要用push才会生效
        // onPress={() => navigation.navigate('Details')}
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* 返回首页，会直接退到首页 */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      {/* 回到堆栈的顶端 */}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function LogoTitle() {
  return <Text>自定义头部，也可以放图片</Text>;
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName 默认路由 */}
      <Stack.Navigator
        initialRouteName="Home"
        // 匹配到所有路由
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // 配置名称
          options={{
            title: 'My home',
            headerStyle: {
              //单独配置
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // 右侧
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        {/* 嵌套路由 */}
        <Stack.Screen name="NestScreen" component={NestScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          // 默认参数
          initialParams={{itemId: 42}}
          // 组件title
          options={{headerTitle: (props) => <LogoTitle {...props} />}}
        />
        <Stack.Screen name="PropsScreen">
          {(props) => <PropsScreen {...props} extraData={{a: '1'}} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
