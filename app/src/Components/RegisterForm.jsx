import { Box, Button, Form, FormField, Text, TextInput } from 'grommet'
import React, { useState } from 'react'
import { FormNext, FormPrevious } from 'grommet-icons'

const RegisterForm = () => {
	const [next, setNext] = useState(false)
	return (
		<div className="loginform-container">
			<div className="loginform-mt">
				<h1 className="loginform-eslogan">Start your Marketing Campaign Now!</h1>
			</div>
			<div className="loginform-formulario">
				<Form className="registerform-border">
					<div className="loginform-header">
						<div className="loginform-header-text">Register</div>
					</div>
					<div>
						{next ? (
							<>
								<FormField className="login-form-label" color="black" label="password">
									<TextInput
										name="lastname"
										className="add-new-label"
										type="password"
										placeholder="your password"
										required
									/>
								</FormField>
								<FormField
									className="login-form-label"
									color="black"
									label="confirm password"
								>
									<TextInput
										name="lastname"
										className="add-new-label"
										type="password"
										placeholder="password again"
										required
									/>
								</FormField>
							</>
						) : (
							<>
								<FormField color="black" className="login-form-label" label="name">
									<TextInput
										name="name"
										className="add-new-label"
										type="text"
										required
									/>
								</FormField>
								<FormField className="login-form-label" color="black" label="last name">
									<TextInput
										name="lastname"
										className="add-new-label"
										type="text"
										required
									/>
								</FormField>
								<FormField className="login-form-label" color="black" label="email">
									<TextInput
										name="email"
										className="add-new-label"
										type="email"
										required
									/>
								</FormField>
							</>
						)}
					</div>
					<Box
						as="footer"
						gap="small"
						direction="row"
						align="center"
						justify="center"
						pad={{ top: 'medium', bottom: 'small' }}
					>
						{next ? (
							<div className="register-flex">
								<Button
									label={
										<Text className="register-text-icon" color="black">
											<FormPrevious color="black" />
											Back
										</Text>
									}
									color="#7D4CDB"
									style={{ marginRight: 20 }}
									className="register-button-back"
									onClick={() => setNext(false)}
								/>
								<Button
									label={
										<Text className="register-text-icon" color="black">
											Submit
										</Text>
									}
									className="register-button-back"
									color="#7D4CDB"
									type="submit"
								/>
							</div>
						) : (
							<Button
								label={
									<Text className="register-text-icon" color="black">
										Next <FormNext color="black" />
									</Text>
								}
								className="register-button-back"
								color="#7D4CDB"
								onClick={() => setNext(true)}
							/>
						)}
					</Box>
				</Form>
			</div>
		</div>
	)
}

export default RegisterForm
