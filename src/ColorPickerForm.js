import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	picker: {
		width: '100% !important',
		marginTop: '2rem',
	},
	addColor: {
		width: '100%',
		padding: '1rem',
		marginTop: '1rem',
	},
	colorNameInput: {
		width: '100%',
		height: '70px',
	},
};

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = { currentColor: 'teal', newColorName: '' };
	}
	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule('isColorUnique', (value) =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}
	updateCurrentColor = (newColor) => {
		this.setState({ currentColor: newColor.hex });
	};
	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};
	handleSubmit = () => {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName,
		};
		this.props.addNewColor(newColor);
		this.setState({ newColorName: '' });
	};
	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div>
				<ChromePicker
					color={currentColor}
					className={classes.picker}
					onChangeComplete={this.updateCurrentColor}
				/>
				<ValidatorForm onSubmit={this.handleSubmit} ref='form'>
					<TextValidator
						className={classes.colorNameInput}
						margin='normal'
						placeholder='Add Color Name'
						value={newColorName}
						name='newColorName'
						variant='filled'
						onChange={this.handleChange}
						validators={['required', 'isColorNameUnique', 'isColorUnique']}
						errorMessages={[
							'Enter a color name',
							'Color name must be unique',
							'Color already used!',
						]}
					/>
					<Button
						variant='contained'
						type='submit'
						disabled={paletteIsFull}
						className={classes.addColor}
						color='primary'
						style={{
							backgroundColor: paletteIsFull ? 'grey' : currentColor,
						}}>
						{paletteIsFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
