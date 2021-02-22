import CButton from './';

export default {
	title: 'Example/Button',
	component: CButton,
	argTypes: {
		backgroundColor: { control: 'color' },
		color: { control: 'color' },
		size: {
			control: { type: 'select', options: ['small', 'medium', 'full', 'default', 'modal'] }
		},
		buttonType: {
			control: { type: 'select', options: ['primary', 'outline', 'link', 'muted'] }
		},
		iconPosition: {
			control: { type: 'select', options: ['left', 'right'] }
		}
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { CButton },
	template: '<c-button @onClick="onClick" v-bind="$props" />'
});
export const muted = Template.bind({});
muted.args = {
	buttonType: 'muted',
	label: 'Muted Button'
};
export const link = Template.bind({});
link.args = {
	label: 'Link Button',
	color: '#333758',
	buttonType: 'link'
};
export const primary = Template.bind({});
primary.args = {
	buttonType: 'primary',
	label: 'Primary Button'
};

export const outline = Template.bind({});
outline.args = {
	buttonType: 'outline',
	label: 'Outline Button'
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
	label: 'Medium Button'
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Small Button'
};
export const Full = Template.bind({});
Full.args = {
	size: 'full',
	label: 'Full width'
};
export const Modal = Template.bind({});
Modal.args = {
	size: 'modal',
	label: 'Modal Button'
};
export const Default = Template.bind({});
Default.args = {
	size: 'default',
	label: 'Default button'
};
export const IconLeft = Template.bind({});
IconLeft.args = {
	icon: true,
	iconPosition: 'left',
	label: 'Icon Left'
};
export const IconRight = Template.bind({});
IconRight.args = {
	icon: true,
	iconPosition: 'right',
	label: 'Icon Right'
};
