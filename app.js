(function(){
	var app = {
		inputR : undefined,
		inputG : undefined,
		inputB : undefined,
		parseA : 10,

		init : function(){
			this.valeurForm();
			app.watcher();
		},
		watcher : function(){
			$("form").on("change",this.valeurForm.bind(this));

		},
		valeurForm : function(){
			this.inputR = $("#sliderR").val();
			this.inputG = $("#sliderG").val();
			this.inputB = $("#sliderB").val();
			this.inputA = $("#sliderA").val();
			this.parseA = parseInt(this.inputA,10)/10;
			$('#valR').html(this.inputR);
			$('#valG').html(this.inputG);
			$('#valB').html(this.inputB);
			$('#valA').html(this.parseA);
			this.bcColor();
		},
		bcColor : function(){
			var inputColor = this.inputR + "," + this.inputG + "," + this.inputB + "," + this.parseA ;
			var rgbColor = "rgba("+inputColor+")";
			$("body").css("background-color", ""+rgbColor+"");
			var test = this.inputR%16;


			console.log(this.inputR);
			console.log(this.inputG);
			console.log(this.inputB);
			console.log(this.inputA);
			// console.log(test.toString(16));
			// console.log(rgbColor);

			 // $("body").css("background-color", "rgba(134,56,165,0.5)");

			},
		};
		app.init();
	})();