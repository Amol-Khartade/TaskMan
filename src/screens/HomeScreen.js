import React from 'react'
import { Text, Button } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #0f5;
`
const Heading = styled.Text`
	color: #000;
	font-size: 24px;
`

const HomeScreen = () => {
	return (
		<Container>
			<Heading>TaskMan</Heading>
		</Container>
	)
}

export default HomeScreen
