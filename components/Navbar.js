import React from 'react';
import NavigationBar from 'react-native-navbar';

export default class Navbar extends Component {
  render() {
    return (
      <View>
        <NavigationBar
          title='Navbar'
          height={50}
          leftButtonTitle='back'
          rightButtonTitle='forward'
        />
        <Text>ABC</Text>
      </View>
    );
  }
}

const styles = {
  navContainer: {
    flex: 1
  }
};
