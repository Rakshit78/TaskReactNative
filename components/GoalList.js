import { StyleSheet, View, Text, Pressable } from 'react-native';
const GoalList = (props) => {
  const helperfunction = () => {
    props.del(props.id);
  };
  return (
    <Pressable onPress={props.del.bind(this, props.id)}>
      <View style={styles.stylelist}>
        <Text style={{ color: 'white' }}>{props.res}</Text>
      </View>
    </Pressable>
  );
};

export default GoalList;

const styles = StyleSheet.create({
  stylelist: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
});
