export default {
	name: 'c-button',
	props: {
		label: {
			type: String,
			required: true
		},
		buttonType: {
			type: String,
			default: 'muted',
			validator: function(value) {
				return ['primary', 'outline', 'link', 'muted'].indexOf(value) !== -1;
			}
		},
		size: {
			type: String,
			default: 'default',
			validator: function(value) {
				return ['small', 'medium', 'full', 'modal', 'default'].indexOf(value) !== -1;
			}
		},
		backgroundColor: {
			type: String
		},
		color: {
			type: String
		},
		icon: {
			type: Boolean,
			default: false
		},
		iconPosition: {
			type: String,
			default: 'left',
			validator: function(value) {
				return ['left', 'right'].indexOf(value) !== -1;
			}
		}
	},
	computed: {
		classes() {
			return {
				btn: true,
				[`btn-${this.buttonType}`]: true,
				[`btn-${this.size}`]: true,
				'btn-icon--left': this.icon && this.iconPosition === 'left',
				'btn-icon--right': this.icon && this.iconPosition === 'right'
			};
		},
		style() {
			return {
				backgroundColor: this.backgroundColor,
				color: this.color
			};
		}
	},
	methods: {
		onClick() {
			this.$emit('onClick');
		}
	}
};
