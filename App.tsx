import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import {size} from './src/theme/fonts';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
      }}>
      <Text
        style={{color: colors.white, fontSize: size.lg, fontWeight: 'bold'}}>
        <MaterialIcons name="auto-fix-high" size={25} /> Hello World!
      </Text>
    </View>
  );
};

export default App;