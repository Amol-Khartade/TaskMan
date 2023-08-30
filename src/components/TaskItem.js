import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TaskItem = (props) => {
	return (
		<View style={styles.item}>
			<View style={styles.itemLeft}>
				<View style={styles.sq}></View>
				<Text style={styles.itemText}>{props.text}</Text>
			</View>

			<View style={styles.circular}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#fff',
		color: '#000',
		padding: 15,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
		margin: 2,
		marginTop: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	sq: {
		width: 24,
		height: 24,
		backgroundColor: '#55bcf6',
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 15,
	},
	itemText: {
		maxWidth: '88%',
	},
	circular: {
		width: 12,
		height: 12,
		borderRadius: 6,
		borderWidth: 2,
		borderColor: '#55bcf6',
	},
})

export default TaskItem
