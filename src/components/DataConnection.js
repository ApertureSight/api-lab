export async function NasaAPIConnection(year) {

    let key ="U0WzhFnX4dihmTJQahtCY2MJbVyPf5eLsh2DZfkM";
    let date = year.toString()  +"-12-25";
    let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`;


    //fetch data

    let res = await fetch(query);

    //turn into jon

    let data = res.json();

    //return

    return data;
}