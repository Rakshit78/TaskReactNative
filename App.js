import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import GoalList from './components/GoalList';
import Goalinput from './components/Goalinput';

export default function App() {
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  const handleClick = (inputvalue) => {
    setList((res) => [
      ...res,
      { name: inputvalue, id: Math.random().toString() },
    ]);
    endmodal();
  };
  function del(id) {
    setList((curlist) => {
      return curlist.filter((res) => {
        return res.id !== id;
      });
    });
  }
  function showmodal() {
    setModal(true);
  }
  function endmodal() {
    setModal(false);
  }
  return (
    <View style={styles.addpadding}>
      <Button title='add goals modal' color='orange' onPress={showmodal} />
      {modal && (
        <Goalinput
          handleClick={handleClick}
          visible={modal}
          endmodal={endmodal}
        />
      )}
      <View style={styles.cen}>
        <FlatList
          data={list}
          renderItem={(res) => {
            return <GoalList res={res.item.name} del={del} id={res.item.id} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addpadding: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  inputcolor: {
    borderWidth: 1,
    borderColor: 'green',
    width: '70%',
    marginRight: 3,
    padding: 8,
  },
  cen: {
    flex: 3,
    paddingTop: 8,
  },
});
