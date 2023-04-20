import React, { useState } from "react";
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

	const handleButtonPress = () => {
		setShowPopup(true);
	};

	const handlePopupClose = () => {
		setShowPopup(false);
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<View style={styles.content}>
				{showPopup ? (
					<View style={styles.popup}>
						<TextInput
							placeholder="Task name"
							style={styles.input}
						/>
						<TextInput
							placeholder="Task description"
							style={styles.input}
						/>
						<TouchableOpacity style={styles.submitButton}>
							<Text style={styles.submitButtonText}>Add</Text>
						</TouchableOpacity>
					</View>
				) : (
					<TouchableOpacity
						style={styles.button}
						onPress={handleButtonPress}
					>
						<Text style={styles.text}>
							Add your first task {"\u2795"}
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#101010",
	},
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		width: 120,
		height: 44,
		backgroundColor: "red",
		borderRadius: 22,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "black",
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
		padding: 8,
		backgroundColor: "gray",
		zIndex: 2,
	},
	input: {
		height: 40,
		backgroundColor: "white",
		borderRadius: 4,
		padding: 8,
		marginBottom: 8,
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
});
