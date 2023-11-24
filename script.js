const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 
'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 
'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 
'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 
'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 
'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 
'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 
'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 
'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if(str.length){
		results = fruit.filter((term) => {
			return term.toLowerCase().includes(str);
		});
		console.log(results);
	}
	showSuggestions(results, str);

	if(!results.length){
		suggestions.innerHTML = '';
	}
}

function searchHandler(e) {
	let word = e.target.value.toLowerCase()
	search(word);
}

function showSuggestions(results, inputVal) {

	const content = results.map(list => {
		return "<li onclick = useSuggestion(this)>" + list + "<li>";//this will create the list items and also pass the value you click to useSuggestion
	});
	suggestions.innerHTML = "<ul>" + content.join('') + "</ul>"; //the join gets rid of commas in between all the suggestions
}

function useSuggestion(e) {
	input.value = e.innerHTML;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
//suggestions.addEventListener('click', useSuggestion); instead of calling this here I did it within the li