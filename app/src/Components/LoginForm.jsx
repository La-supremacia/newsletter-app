import {
	Box,
	Button,
	Form,
	FormField,
	Heading,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Text,
	TextInput,
} from 'grommet'
import { FormClose } from 'grommet-icons'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
	return (
		<div className="loginform-container">
			<div className="loginform-mt">
				<h1 className="loginform-eslogan">Start your Marketing Campaign Now!</h1>
			</div>
			<div className="loginform-formulario">
				<Box
					pad="medium"
					gap="small"
					width={{ min: 'medium' }}
					height={{ min: 'small' }}
					fill
				>
					<Form>
						<div className="loginform-header">
							<Heading level={3} margin="none">
								Login
							</Heading>
						</div>
						<div className="modal-contact">
							<FormField className="login-form-label" label="email">
								<TextInput
									name="name"
									className="add-new-label"
									placeholder="John"
									required
								/>
							</FormField>
							<FormField className="login-form-label" label="password">
								<TextInput
									name="lastname"
									className="add-new-label"
									placeholder="Doe"
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
									<Text color="white">
										<strong>Save</strong>
									</Text>
								}
								primary
								type="submit"
								color="#7D4CDB"
							/>
						</Box>
					</Form>
				</Box>
			</div>
		</div>
	)
}

export default LoginForm
