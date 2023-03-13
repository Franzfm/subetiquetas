<script>
		// Seleccionar todas las etiquetas span dentro del div con clase "entry-text text-break mb-5" y id "post-body"
		var spans = document.querySelectorAll("div.entry-text.text-break.mb-5 #post-body span");

		// Crear un objeto para almacenar cada clase de span y sus botones asociados
		var buttonGroups = {};

		// Iterar a través de cada etiqueta span y crear un botón para cada clase
		for (var i = 0; i < spans.length; i++) {
			var spanClass = spans[i].classList.value;
			
			if (!buttonGroups[spanClass]) {
				// Si no hay un grupo de botones para esta clase de span, crear uno
				buttonGroups[spanClass] = true;
				
				// Crear un botón para esta clase de span
				var button = document.createElement("button");
				button.innerHTML = spanClass;
				document.getElementById("button-group").appendChild(button);
			
				// Agregar un controlador de eventos al botón para resaltar todas las etiquetas span con esta clase
				button.addEventListener("click", function() {
					// Seleccionar todas las etiquetas span con esta clase y resaltarlas
					var spanClass = this.innerHTML;
					var spansWithClass = document.querySelectorAll("div.entry-text.text-break.mb-5 #post-body span." + spanClass);
					for (var j = 0; j < spansWithClass.length; j++) {
						spansWithClass[j].classList.toggle("highlight");
					}
				});
			}
		}
</script>
