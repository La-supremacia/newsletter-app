import { Box, Button, Form, FormField, Heading, Text, TextInput } from 'grommet'
import React from 'react'

const LoginForm = () => {
	return (
		<div className="loginform-container">
			<div className="loginform-mt">
				<h1 className="loginform-eslogan">Start your Marketing Campaign Now!</h1>
			</div>
			<div className="loginform-formulario">
				<Form className="loginform-border">
					<div className="loginform-header">
						<Heading color="black" className="loginform-header-text">
							Login
						</Heading>
					</div>
					<div>
						<FormField className="login-form-label" label="email">
							<TextInput name="name" className="add-new-label" type="email" required />
						</FormField>
						<FormField className="login-form-label" label="password">
							<TextInput
								name="lastname"
								className="add-new-label"
								type="password"
								required
							/>
						</FormField>
					</div>
					<Box
						as="footer"
						gap="small"
						direction="row"
						align="center"
						justify="center"
						pad={{ top: 'medium', bottom: 'small' }}
					>
						<Button
							label={
								<Text className="loginform-button-text" color="black">
									Submit
								</Text>
							}
							type="submit"
							className="loginform-button-submit"
							color="#7D4CDB"
						/>
					</Box>
				</Form>
			</div>
		</div>
	)
}

export default LoginForm
