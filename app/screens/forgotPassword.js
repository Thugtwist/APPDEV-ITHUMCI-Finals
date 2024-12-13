import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Make sure Firebase Auth is initialized

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState(""); // Store email for password reset
  const [isEmailSent, setIsEmailSent] = useState(false); // Track if email was sent

  // Function to send password reset email via Firebase
  const handleSendPasswordResetEmail = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }

    try {
      // Send password reset email using Firebase Authentication
      await sendPasswordResetEmail(auth, email);
      setIsEmailSent(true); // Mark email as sent
      Alert.alert("Success", "A password reset link has been sent to your email.");
    } catch (error) {
      let errorMessage = "Something went wrong. Please try again later.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No user found with this email address.";
      }
      Alert.alert("Error", errorMessage);
    }
  };

  return (
    <LinearGradient colors={["#4ca1af", "#c4e0e5"]} style={styles.gradientBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>

        {/* Email input for password reset */}
        {!isEmailSent ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleSendPasswordResetEmail}>
              <LinearGradient colors={["#7cccc7", "#4ca1af"]} style={styles.gradientButton}>
                <Text style={styles.buttonText}>Send Reset Link</Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        ) : (
          // Success message after email is sent
          <Text style={styles.successMessage}>Check your email for the reset link!</Text>
        )}

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontFamily: "PlayfairDisplayBlack",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 12,
    fontFamily: "HanumanBlack",
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginBottom: 20,
  },
  gradientButton: {
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    fontFamily: "PlayfairDisplayBlack",
    color: "white",
    fontSize: 16,
  },
  successMessage: {
    fontFamily: "PlayfairDisplayBlack",
    color: "#4ca1af",
    fontSize: 18,
    marginBottom: 20,
  },
  closeText: {
    color: "#4ca1af",
    fontSize: 16,
    marginTop: 10,
    fontFamily: "PlayfairDisplayBlack",
  },
});

export default ForgotPasswordScreen;
