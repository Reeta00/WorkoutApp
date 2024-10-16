
import { View } from 'react-native';
import { Button, useTheme, Text } from 'react-native-paper';
import styles from './Styles';

const Home = ({ navigation }) => {
    const theme = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.outlineVariant }]}>
            <View><Text variant='headlineLarge'
                style={{ fontFamily: 'QuicksandFont' }}>Workout App</Text></View>
            <Button
                icon={'plus-box-multiple-outline'}
                style={styles.button}
                mode="elevated"
                onPress={() => navigation.navigate('Add Exercises')}
            >Add workout</Button>
            <Button
                icon={'view-list-outline'}
                style={styles.button}
                mode="elevated"
                onPress={() => navigation.navigate('Show Exercises')}
            >Show workouts</Button>
        </View>
    );
};

export default Home;