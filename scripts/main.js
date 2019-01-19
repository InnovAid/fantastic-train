let submit_button = document.getElementById("submit");
let upload_control = document.getElementById("upload");

//event handler for when submit button is clicked
function processUpload() {

	let image_file = upload_control.files[0];
	let image_text = getImageText(image_file);
	let product_name = mapTextToProduct(image_text);

	console.log(product_name);
}

//given an image file, obtains the text contained within the image
function getImageText(img) {

}

//obtains all existing text mappings from the db
function getAllMappings() {

}

//given the text obtained from an image, attempts to map it to a specific product
function mapTextToProduct(txt) {
	
	let mappings = getAllMappings();

	
}


submit_button.addEventListener("click", processUpload);