class Slider

	@open = false
	constructor: (@element) ->

		@init()


	init: =>

		@slider = @element.children "div:nth-of-type(1)"
		@width = @element.width()

		@slider.click () =>

			if not @open

				@element.animate {

					right: 0	
				}, 1000, () =>

					@open = true

			else

				@element.animate {

					right: -@width
				}, 1000, () =>

					@open = false




$(document).ready () ->

	controller = new Slider $('#slider')
