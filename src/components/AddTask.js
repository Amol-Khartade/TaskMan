import React, { useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native'

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState('')

  const handleAddTask = () => {
    Keyboard.dismiss()
    onAddTask(task)
    setTask('')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addTaskWrapper}
    >
      <TextInput
        style={styles.taskInput}
        placeholder={'Add Task'}
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  addTaskWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  taskInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 260,
  },
  addWrapper: {
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#103145',
  },
})

export default AddTask
