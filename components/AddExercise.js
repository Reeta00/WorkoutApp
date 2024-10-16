import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Button, SegmentedButtons, RadioButton, useTheme } from 'react-native-paper';
import styles from './Styles';
import CalendarModal from './Calendar';
import { Text } from 'react-native-paper';

const AddExercise = ({ navigation, addNewExercise, setCurrentUnit, currentUnit }) => {
    const [exercise, setExercise] = useState('');
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');
    const [date, setDate] = useState('');

    const theme = useTheme();

    useEffect(() => {
        if (distance) {
            if (currentUnit === 'miles') {
                const kmValue = parseFloat(distance);
                const milesValue = kmValue ? (kmValue * 0.621371).toFixed(1) : '';
                setDistance(milesValue);
            } else {
                const milesValue = parseFloat(distance);
                const kmValue = milesValue ? (milesValue / 0.621371).toFixed(1) : '';
                setDistance(kmValue);
            }
        }
    }, [currentUnit]);

    const handleSubmit = () => {
        if (exercise && duration && distance && date) {
            const newExercise = {
                exercise,
                duration,
                distance: parseFloat(distance),
                unit: currentUnit,
                date
            };
            addNewExercise(newExercise);

            setExercise('');
            setDuration('');
            setDistance('');
            setDate('');

            navigation.navigate('Show Exercises');
        } else {
            alert('Please fill all the fields');
        }
    };

    const handleDistanceChange = (value) => {
        setDistance(value);
    };

    const handleDateSelected = (selectedDate) => {
        setDate(selectedDate);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.onSurfacesurface }]}>

            <Text variant='headlineMedium' style={{ fontFamily: 'QuicksandFont', paddingBottom: 20 }}>Add exercises</Text>

            <SegmentedButtons
                style={{
                    backgroundColor: theme.colors.onPrimary,

                }}
                value={exercise}
                onValueChange={setExercise}
                buttons={[
                    { value: 'Hiking', label: 'Hiking', icon: "hiking" },
                    { value: 'Swimming', label: 'Swimming', icon: "swim" },
                    { value: 'Golfing', label: 'Golfing', icon: "golf" }
                ]}
            />
            <TextInput
                placeholder="Duration (minutes)"
                keyboardType="numeric"
                value={duration}
                onChangeText={setDuration}
                style={styles.input}
            />
            <TextInput
                placeholder={`Distance (${currentUnit})`}
                keyboardType="numeric"
                value={distance}
                onChangeText={handleDistanceChange}
                style={styles.input}
            />


            <RadioButton.Group
                onValueChange={(value) => setCurrentUnit(value)}
                value={currentUnit}
                style={styles.radioGroup}
            >
                <RadioButton.Item label="Kilometers" value="km" />
                <RadioButton.Item label="Miles" value="miles" />
            </RadioButton.Group>

            <CalendarModal onDateSelected={handleDateSelected} />

            <Button onPress={handleSubmit}
                mode='contained'>Add workout</Button>
        </View>
    );
};

export default AddExercise;
