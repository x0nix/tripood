const Component = require('./component')
require('../modules/jquery-ui.min.js')

/**
 * Slider component class
 *
 * - all DOM operations must be executed after creating an instance (in constructor)
 * - when defining own constructor, don't forget to call super(element, data)
 * - DOM event listeners are in Backbone style
 *
 */
module.exports = class Slider extends Component {

    constructor(el, data) {
        super(el, data)

        const selector = $(data.writeData)

        const handle = $( ".steps-speed-slider-handle" );
        const $slide = $(".steps-speed-slider")
        $slide.slider({
            create: function() {
                handle.text( $( this ).slider( "value" ) );
                selector.text( $( this ).slider( "value" ))
            },
            slide: function( event, ui ) {
                handle.text( ui.value );
                selector.text(ui.value)
            }
        });

    }

}
