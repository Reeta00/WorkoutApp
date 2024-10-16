import React, { useState } from "react";
import { Modal, Portal, Button } from "react-native-paper";
import styles from "./Styles";
import { Calendar } from "react-native-calendars";
import { View } from "react-native";


const CalendarModal = ({ onDateSelected }) => {

    const [visible, setVisible] = React.useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const onDayPress = (day) => {
        const formattedDate = formatDate(day.dateString);
        setSelectedDate(formattedDate);
        hideModal();
        if (onDateSelected) {
            onDateSelected(formattedDate);
        }
    };

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}.${month}.${year}`;
    };

    return (
        <View style={styles.container}>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Calendar onDayPress={onDayPress} />
                </Modal>
            </Portal>
            <Button
                mode='contained-tonal'
                style={{ padding: 1, margin: 10, borderRadius: 10 }}
                icon='calendar'
                onPress={showModal}>
                {selectedDate ? `${selectedDate}` : 'Select date'}
            </Button>
        </View>
    );
};

export default CalendarModal;
