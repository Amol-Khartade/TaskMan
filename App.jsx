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
import { useState } from 'react'

import TaskItem from './src/components/TaskItem'

export default function App() {
	const [task, setTask] = useState('')
	const [taskItems, setTaskItems] = useState([])

	const handleAddTask = () => {
		Keyboard.dismiss()
		setTaskItems([...taskItems, task])
		setTask('')
	}
	const handleTaskComplete = (index) => {
		let itemsCopy = [...taskItems]
		itemsCopy.splice(index, 1)
		setTaskItems(itemsCopy)
	}

	return (
		<View style={styles.container}>
			<View style={styles.taskWrapper}>
				<Text style={styles.headText}>Today's Tasks</Text>

				<View style={styles.items}>
					{taskItems &&
						taskItems.map((item, index) => {
							return (
								<TouchableOpacity key={index} onPress={() => handleTaskComplete(index) }>
									<TaskItem text={item} />
								</TouchableOpacity>
							)
						})}
				</View>
			</View>
			{/*Add task*/}
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

				<TouchableOpacity onPress={() => handleAddTask()}>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e8eaed',
	},
	taskWrapper: {
		paddingTop: 85,
		paddingHorizontal: 25,
	},
	headText: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	items: {},
	textInput: {
		backgroundColor: '#ffa',
		borderColor: '#000',
		borderWidth: 2,
		margin: 10,
		padding: 20,
	},
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
