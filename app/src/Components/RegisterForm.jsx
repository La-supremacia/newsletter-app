import React from 'react'

import { Box, Button, Form, FormField, Grommet, Text, TextInput } from 'grommet'

import { MailOption, Lock } from 'grommet-icons'

const RegisterForm = () => {
	const [value, setValue] = React.useState({})
	const message =
		value.name && value.email && value.name[0] !== value.email[0]
			? 'Mismatched first character'
			: undefined

	return (
		<Grommet>
			<Box
				gridArea="main"
				background="white"
				width={{ min: '300px', max: '100%' }}
				justify="evenly"
				gap="medium"
			>
				<Text size="xlarge" textAlign="center">
					Create account
				</Text>
				<Form
					value={value}
					onChange={(nextValue) => setValue(nextValue)}
					onSubmit={({ value: nextValue }) => console.log(nextValue)}
				>
					<FormField label="Name" name="name" required>
						<TextInput name="name" type="name" />
					</FormField>

					<FormField label="Last Name" name="lastName" required>
						<TextInput name="lastName" type="name" />
					</FormField>

					<FormField label="Email" name="email" required>
						<TextInput name="email" type="email" icon={<MailOption />} />
					</FormField>

					<FormField label="Password" name="password" required>
						<TextInput name="password" type="password" icon={<Lock />} />
					</FormField>

					<FormField label="Confirm password" name="passwordConfirm" required>
						<TextInput name="passwordConfirm" type="password" icon={<Lock />} />
					</FormField>

					{message && (
						<Box pad={{ horizontal: 'small' }}>
							<Text color="status-error">{message}</Text>
						</Box>
					)}

					<Box direction="row" justify="between" margin={{ top: 'large' }}>
						<Button type="reset" label="Clear" color="rgb(125, 76, 219)" />
						<Button type="submit" label="Submit" primary color="rgb(125, 76, 219)" />
					</Box>
				</Form>
			</Box>
		</Grommet>
	)
}

export default RegisterForm
