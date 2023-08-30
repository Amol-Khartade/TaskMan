import React from 'react'
import { View, Text, Button } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

const MenuText = styled.Text`
	font-size: 20px;
	margin-bottom: 20px;
`

const MenuScreen = ({ navigation }) => {
	return (
		<Container>
			<MenuText>Menu Screen</MenuText>
			<Button title="Go Back" onPress={() => navigation.goBack()} />
		</Container>
	)
}

export default MenuScreen
