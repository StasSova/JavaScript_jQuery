const CLIENT_ID = 'CLIENT_API';
const COUNT_PHOTOS_BY_GET = 25;

let state = [];

const fetchPhotos = async () =>{
    try{

        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=${COUNT_PHOTOS_BY_GET}`;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok && data.length > 0){
            state = data;
        }
    }
    catch(ex){
        console.log(ex);
    }
}

const getUrlPhotos = async () => {
    try {
        await fetchPhotos(); // Ждем завершения выполнения запроса
        console.log(state);
        return state.map(({ urls: { regular } }) => {
            return regular;
        });
    } catch(ex) {
        console.log(ex);
    }
}
