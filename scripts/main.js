/*
	CLARIFICATION ON TERMINOLOGY

	item		item entry in database
	product		items which contain similar titles in their labels are deemed the same product, even if concentration differs.
*/



let submit_button = document.getElementById("submit");
let upload_control = document.getElementById("upload");

//event handler for when submit button is clicked
function processUpload() {

	let image_file = upload_control.files[0];
	let image_text = getImageText(image_file);
	let item_id = mapTextToItemId(image_text);

	console.log(item_id);
}

//given an image file, obtains the text contained within the image
function getImageText(img) {

}

//obtains all existing text mappings from the db
function getAllMappings() {

}

//given a mapping m, returns item id of m.
function getItemId(m) {

}

//given the text obtained from an image, attempts to map it to a specific item. returns id of said item.
function mapTextToItemId(txt) {



	/*
		m		mapping
		txt		text (from image-to-text logic)
		tol		tolerance for mistakes. will be increased as time goes on if no results are found.

		returns true if m is deemed relevant to txt, i.e. m and txt represent the same product, false otherwise.
		this is determined keeping tol in mind.
	*/
	function checkRelevance(m, txt, tol) {

		

	}

	/*
		given two item ids, returns true if they represent the same product.
	*/
	function sameProduct(id1, id2) {

		//todo handle same product but diff item
		return id1 === id2;
	}

	//given array of mappings ms, returns true if all represent the same product, and false otherwise.
	function singleProduct(ms) {

		//todo what if = 0?
		if (ms.length === 1) {
			return true;
		}
		else {
			let first = getItemId(ms[0]);

			for (let i = 1; i < ms.length; i++) {
				
				if (!sameProduct(getItemId(ms[i]), first)) {
					return false;
				}
			}

			return true;
		}
	}



	let mappings = getAllMappings();
	let relevant_mappings;
	let tolerance = 0;

	do {
		relevant_mappings = mappings.filter(m => checkRelevance(m, txt, tolerance));
		tolerance++;
	}
	while (relevant_mappings.length === 0);


	while (!singleProduct(relevant_mappings)) {

	}


	//todo does not yet account for different items with same product tag

	rv = getItemId(mappings[0]);
	return rv;
}


submit_button.addEventListener("click", processUpload);