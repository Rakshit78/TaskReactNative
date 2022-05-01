import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Modal,
} from 'react-native';
import { useState } from 'react';
const Goalinput = (props) => {
  const [userinput, setUserinput] = useState('');
  const getUserInput = (data) => {
    setUserinput(data);
  };
  const addgoalhandler = () => {
    props.handleClick(userinput);
    setUserinput('');
  };
  return (
    <Modal animationType='slide' visible={props.visible}>
      <View style={styles.row}>
        <TextInput
          placeholder='Enter you goals'
          style={styles.inputcolor}
          onChangeText={getUserInput}
          value={userinput}
        />
        <View style={styles.secondview}>
          <View style={styles.btn}>
            <Button title='Add Goals' color='orange' onPress={addgoalhandler} />
          </View>
          <View style={styles.btn}>
            <Button title='X' color='orange' onPress={props.endmodal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Goalinput;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  inputcolor: {
    borderWidth: 1,
    borderColor: 'green',
    width: '100%',
    marginRight: 3,
    padding: 8,
  },
  secondview: {
    flexDirection: 'row',
  },
  btn: {
    width: '30%',
    marginTop: 8,
    marginHorizontal: 8,
  },
});
