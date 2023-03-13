import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from '../components/style';
export default ExerciseScreen = () => {
  return (
    <SafeAreaView style={styles.wrapContainer}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.header}>Exercises</Text>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('Home')}>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
