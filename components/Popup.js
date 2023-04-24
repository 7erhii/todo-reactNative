import React, { useState, useRef } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";



export default function Popup({ onClose, onAdd }) {
	const [input1Ref, setInput1Ref] = useState(null);

	const handleAddTask = () => {
		// TODO: handle adding task
		onAdd();
	};

	return (
		<View style={styles.popup}>
						<TextInput
							ref={(input) => setInput1Ref(input)}
							placeholder="Task title"
							style={styles.input}
							autoFocus={true}
						/>
						<TextInput
							placeholder="Task description"
							style={styles.input}
						/>
						<TouchableOpacity
							style={styles.submitButton}
							onPress={() => {
								handleAddTask();
								handlePopupClose();
							}}
						>
							<Text style={styles.submitButtonText}>Add</Text>
						</TouchableOpacity>
					</View>
	);
}

const styles = StyleSheet.create({
	popup: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		padding: 14,
		backgroundColor: "gray",
		zIndex: 2,
		borderTopLeftRadius: 10,
		borderTopEndRadius: 10,
	},
	input: {
		height: 40,
		backgroundColor: "white",
		borderRadius: 4,
		padding: 8,
		marginBottom: 8,
		outlineWidth: 0,
	},
	submitButton: {
		width: 100,
		height: 20,
		backgroundColor: "red",
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 3,
	},
	closeButton: {
		width: 100,
		height: 20,
		backgroundColor: "red",
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 3,
		left: 200,
		top: 0,
	},
	submitButtonText: {
		fontSize: 14,
		color: "white",
	},
});
