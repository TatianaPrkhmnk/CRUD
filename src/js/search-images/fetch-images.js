import axios from 'axios';

export default async function fetchImg(val, page) {
  const url = 'https://pixabay.com/api/'
  const key = '36418933-15e8a5f093f6e7fcbf790e45e'
  const filter = '?key=${key}&q=${val}&image_type=photo&orientation=horizontal&safesearch=true'

  return await axios.get('${url}${filter}').than(response => response.data)
}


// const response = await axios.get('/user?ID=12345');


// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else

// const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
// safesearch - фильтр по возрасту. Задай значение true.