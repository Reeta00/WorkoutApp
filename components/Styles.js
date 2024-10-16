import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  button: {

    marginTop: 20
  },
  input: {
    width: '100%',
    padding: 5,
    marginVertical: 10,
    borderColor: '#aaaaaa',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: '#eeeeee',
    shadowColor: '#5a3434',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  exerciseText: {
    fontSize: 18,
    margin: 8,
  },
  calendarModal: {
    marginVertical: 15,
  },

});

export default styles;
