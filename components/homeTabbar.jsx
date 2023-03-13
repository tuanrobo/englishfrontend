import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GrammarScreen from '../screens/grammarList';
import ExerciseScreen from '../screens/exerciseScreen';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabbar(component) {
	const screenOptions = {
		tabBarActiveTintColor: '#000',
		tabBarInactiveTintColor: '#000',
		headerShown: false,
		tabBarItemStyle: {
			fontFamily: 'Hahmlet-Medium',
		},
	};

	return (
		<Tab.Navigator {...{screenOptions} } >
			<Tab.Screen
				name="Grammar"
				component={GrammarScreen}
				options={{
					tabBarLabel: 'Grammars',
					tabBarIcon: ({focused, size}) => (
						<Image
							source={
								focused
								? require('.././assets/icons/ic-grammar-filled.png')
								: require('.././assets/icons/ic-grammar-outline.png')
							}
							style={{
								width: size,
								height: size,
								borderRadius: 0,
							}}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Exercise"
				component={ExerciseScreen}
				options={{
					tabBarLabel: 'Exercise',
					tabBarIcon: ({focused, color, size}) => (
						<Image
							source={
								focused
									? require('.././assets/icons/ic-exercise-filled.png')
									: require('.././assets/icons/ic-exercise-outline.png')
							}
							style={{
								width: size,
								height: size,
								borderRadius: 0,
							}}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

