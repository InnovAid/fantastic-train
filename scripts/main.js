let submit_button = document.getElementById("submit");
let upload_control = document.getElementById("upload");

function processUpload() {

	let image_file = upload_control.files[0];
	let image_text = getImageText(image_file);
	let product_name = mapTextToProduct(image_text);

	console.log(product_name);
}

function getImageText(img) {

}

function mapTextToProduct(txt) {
	
}


submit_button.addEventListener("click", processUpload);