var Component = require('./component')

/**
 * ToggleClass component class
 *
 * - all DOM operations must be executed after creating an instance (in constructor)
 * - when defining own constructor, don't forget to call super(element, data)
 * - DOM event listeners are in Backbone style
 *
 */
class ToggleClass extends Component {

	constructor(element, data) {
		super(element, data)


        this.trigger = data.trigger || element
        this.place = data.place || element
		this.disableOn = data.disableOn || window.innerWidth + 1

		if (window.innerWidth < this.disableOn) {
			$(this.trigger).on("click", () => $(this.place).toggleClass(data.toggleClass))
		}

	}
}

module.exports = ToggleClass