import { Ionicons } from '@expo/vector-icons';
import { Image as ExpoImage } from 'expo-image';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function SignInScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(true);
	const [showPassword, setShowPassword] = useState(false);

	return (
		<SafeAreaView style={styles.safeArea}>
			<KeyboardAvoidingView
				style={styles.flex}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
				<View style={styles.container}>
					<View style={styles.topDecoration} />
					<View style={styles.topDecorationRight} />
					<View style={styles.smallDots} />

					<Pressable style={styles.backButton}>
						<Ionicons name="chevron-back" size={18} color="#5B5B5B" />
					</Pressable>

					<View style={styles.profileCircle}>
						<Ionicons name="person" size={34} color="#FFFFFF" />
					</View>

					<Text style={styles.title}>Welcome Back</Text>
					<Text style={styles.subtitle}>Sign in to continue to your account</Text>

					<View style={styles.formContainer}>
						<View style={styles.inputWrap}>
							<Ionicons name="mail-outline" size={16} color="#9A9A9A" />
							<TextInput
								value={email}
								onChangeText={setEmail}
								placeholder="Email"
								placeholderTextColor="#B1B1B1"
								keyboardType="email-address"
								autoCapitalize="none"
								style={styles.input}
							/>
						</View>

						<View style={styles.inputWrap}>
							<Ionicons name="lock-closed-outline" size={16} color="#9A9A9A" />
							<TextInput
								value={password}
								onChangeText={setPassword}
								placeholder="Password"
								placeholderTextColor="#B1B1B1"
								secureTextEntry={!showPassword}
								style={styles.input}
							/>
							<Pressable onPress={() => setShowPassword((prev) => !prev)}>
								<Ionicons
									name={showPassword ? 'eye-off-outline' : 'eye-outline'}
									size={16}
									color="#9A9A9A"
								/>
							</Pressable>
						</View>

						<View style={styles.rowBetween}>
							<Pressable
								style={styles.rememberWrap}
								onPress={() => setRememberMe((prev) => !prev)}>
								<View style={[styles.checkBox, rememberMe && styles.checkBoxActive]}>
									{rememberMe ? <Ionicons name="checkmark" size={12} color="#FFFFFF" /> : null}
								</View>
								<Text style={styles.rememberText}>Remember me</Text>
							</Pressable>

							<Pressable>
								<Text style={styles.forgotText}>Forgot password ?</Text>
							</Pressable>
						</View>

						<Pressable style={styles.signInButton}>
							<Text style={styles.signInText}>Sign In</Text>
						</Pressable>

						<View style={styles.orRow}>
							<View style={styles.orLine} />
							<Text style={styles.orText}>OR</Text>
							<View style={styles.orLine} />
						</View>

						<Pressable style={styles.socialButton}>
							<ExpoImage
								source="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/128px-Google_%22G%22_logo.svg.png"
								style={styles.googleIcon}
								contentFit="contain"
								cachePolicy="disk"
							/>
							<Text style={styles.socialText}>Continue with Google</Text>
						</Pressable>

						<Pressable style={styles.socialButton}>
							<Ionicons name="logo-apple" size={18} color="#000000" />
							<Text style={styles.socialText}>Continue with Apple</Text>
						</Pressable>

						<Text style={styles.signupPrompt}>
							Don't have an account? <Text style={styles.signupText}>Sign Up</Text>
						</Text>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#FFF9F1',
	},
	flex: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 28,
		borderTopRightRadius: 28,
		marginTop: 8,
		paddingHorizontal: 16,
		paddingTop: 18,
	},
	topDecoration: {
		position: 'absolute',
		top: -56,
		right: -4,
		width: 130,
		height: 130,
		borderRadius: 65,
		backgroundColor: '#F8E7C1',
		opacity: 0.8,
	},
	topDecorationRight: {
		position: 'absolute',
		top: 40,
		right: -24,
		width: 84,
		height: 84,
		borderRadius: 42,
		borderWidth: 2,
		borderColor: '#EAC867',
		opacity: 0.45,
	},
	smallDots: {
		position: 'absolute',
		top: 90,
		left: 18,
		width: 48,
		height: 30,
		borderStyle: 'dotted',
		borderWidth: 1,
		borderColor: '#E0D2B2',
		opacity: 0.5,
	},
	backButton: {
		width: 32,
		height: 32,
		borderRadius: 16,
		backgroundColor: '#F4F4F4',
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileCircle: {
		width: 66,
		height: 66,
		borderRadius: 33,
		backgroundColor: '#F4B400',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 16,
	},
	title: {
		marginTop: 14,
		textAlign: 'center',
		fontSize: 33,
		fontWeight: '700',
		color: '#1F1F1F',
	},
	subtitle: {
		marginTop: 8,
		textAlign: 'center',
		fontSize: 12,
		color: '#777777',
		marginBottom: 24,
	},
	formContainer: {
		paddingHorizontal: 2,
		gap: 12,
	},
	inputWrap: {
		minHeight: 50,
		borderRadius: 14,
		borderWidth: 1,
		borderColor: '#E9E9E9',
		paddingHorizontal: 12,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	input: {
		flex: 1,
		marginLeft: 8,
		fontSize: 14,
		color: '#242424',
	},
	rowBetween: {
		marginTop: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	rememberWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	checkBox: {
		width: 14,
		height: 14,
		borderRadius: 3,
		borderWidth: 1,
		borderColor: '#F4B400',
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkBoxActive: {
		backgroundColor: '#F4B400',
	},
	rememberText: {
		fontSize: 12,
		color: '#3B3B3B',
		fontWeight: '500',
	},
	forgotText: {
		fontSize: 12,
		color: '#D7A20A',
		fontWeight: '600',
	},
	signInButton: {
		marginTop: 10,
		height: 52,
		borderRadius: 16,
		backgroundColor: '#F4B400',
		alignItems: 'center',
		justifyContent: 'center',
	},
	signInText: {
		color: '#1E1E1E',
		fontSize: 16,
		fontWeight: '700',
	},
	orRow: {
		marginTop: 4,
		marginBottom: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 12,
	},
	orLine: {
		flex: 1,
		height: 1,
		backgroundColor: '#E8E8E8',
	},
	orText: {
		fontSize: 12,
		color: '#ABABAB',
		fontWeight: '600',
	},
	socialButton: {
		height: 50,
		borderRadius: 14,
		borderWidth: 1,
		borderColor: '#E8E8E8',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
		backgroundColor: '#FFFFFF',
	},
	googleIcon: {
		width: 18,
		height: 18,
	},
	socialText: {
		fontSize: 14,
		color: '#2B2B2B',
		fontWeight: '500',
	},
	signupPrompt: {
		textAlign: 'center',
		marginTop: 16,
		fontSize: 13,
		color: '#616161',
	},
	signupText: {
		color: '#F4B400',
		fontWeight: '700',
	},
});
