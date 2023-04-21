import React, { useState, useRef } from "react";
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	KeyboardAvoidingView,
	TextInput,
} from "react-native";

export default function App() {
	const [showPopup, setShowPopup] = useState(false);
	const [input1Ref, setInput1Ref] = useState(null);

	const handleButtonPress = () => {
		setShowPopup(true);
	};

	const handlePopupClose = () => {
		setShowPopup(false);
	};

	const handleAddTask = () => {
		// TODO: handle adding task
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<View style={styles.content}>
				<Text style={styles.titleText}>Add your's first task</Text>
				{showPopup ? (
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
				) : (
					<TouchableOpacity
						style={styles.button}
						onPress={handleButtonPress}
					>
						{/* <Text style={styles.text}>
							Add your first task {"\u2795"}
						</Text> */}
						<Text style={styles.text}>+</Text>
					</TouchableOpacity>
				)}
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#545353",
	},
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		position: "absolute",
		width: 60,
		height: 60,
		backgroundColor: "red",
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "black",
		bottom: 40,
		left: 40,
		zIndex: 300,
	},
	text: {
		fontSize: 14,
		color: "white",
	},
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
	submitButtonText: {
		fontSize: 14,
		color: "white",
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
	titleText: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
		// textTransform: "capitalize",
	},
});
