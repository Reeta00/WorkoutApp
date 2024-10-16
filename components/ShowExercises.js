import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './Styles';
import { useTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ShowExercises = ({ exerciseList, currentUnit }) => {

    const theme = useTheme();

    const convertDistance = (distance, unit, toUnit) => {
        if (toUnit === unit) {
            return Math.round(distance);
        }
        if (toUnit === 'km' && unit === 'miles') {
            return Math.round(distance / 0.621371);
        } else if (toUnit === 'miles' && unit === 'km') {
            return Math.round(distance * 0.621371);
        }
        return Math.round(distance);
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.onSurfacesurface }]}>

            <View>
                <Text variant='headlineMedium' style={{ fontFamily: 'QuicksandFont', paddingBottom: 10 }}>Exercises</Text>
            </View>

            {exerciseList.length > 0 ? (
                <FlatList
                    data={exerciseList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.exerciseItem}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="weight-lifter" size={21} color="#585858" />
                                <Text style={styles.exerciseText}>{item.exercise}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="timer-outline" size={21} color="#585858" /><Text style={styles.exerciseText}>{item.duration} minutes</Text></View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="map-marker-distance" size={21} color="#585858" /><Text style={styles.exerciseText}>
                                    {convertDistance(item.distance, item.unit, currentUnit)} {currentUnit}
                                </Text></View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="calendar-month-outline" size={21} color="#585858" /><Text style={styles.exerciseText}>{item.date}</Text></View>
                        </View>
                    )}
                />
            ) : (
                <Text style={[styles.container, { fontWeight: 'bold', color: '#4d4d4d' }]}>No exercises to show</Text>
            )}
        </View>
    );
};

export default ShowExercises;
