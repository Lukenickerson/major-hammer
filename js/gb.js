
function GbClass () {
	this.isPowerOn = false;
	this.buttonEvent = function(x) {
	}
	this.power = function(on) {
	}
	this.setupGameToyEvents = function() {
		var o = this;
		$('.gb').off("click").on("click", ".cartridge", function(e){
			o.isPowerOn = !o.isPowerOn;
			$('.cartridgeHelp').fadeOut();
			if (o.isPowerOn) {
				$('.gb').addClass("on");
			} else {
				$('.gb').removeClass("on");
			}
			o.power(true);
		}).on("click", "button", function(e){
			o.buttonEvent(e.target.className.toUpperCase());
		});
	}
	//this.setupGameToyEvents();
}