
const Base_Url = 'https://youtube-v31.p.rapidapi.com';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef7c985db8msh752270f57fe8d56p1c2612jsn627ae08c0a9b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
export async function fetchFromApi(url) {
    console.log(url)
    try {
        const response = await fetch(`${Base_Url}/${url}`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}