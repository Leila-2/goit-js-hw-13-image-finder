//import cardTemplate from '../templates/card.hbs'
//========REFS
const button = document.getElementById('js-button')
const list = document.getElementById('js-list')
const form = document.getElementById('search-form')
//=====Api&Base_url
const API_KEY = `23558220-fb5623a2d9636919de7621278`;
const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal`

let searchParam = ''
let pageNumb = 1

//=======Form AddEventListener=======



/*form.addEventListener('submit', (e) => {
    e.preventDefault()

    //console.log(e.target.elements.input)
    //searchParam = e.target.elements.input.value
    const params = `&q=${searchParam}&page=${pageNumb}&per_page=5&key=${API_KEY}`
    const url = BASE_URL + params


    fetch(url)
        .then(resp => {
            //console.log(resp)
            return resp.json()
        })
        .then(data => {
            //console.log(data.hits)
            return data.hits
        })
        .then((array) => {
            // console.log(array)
            let result = array.map(elem => {
                console.log('result', elem)
                const { webformatURL, largeImageURL, likes, views, comments, downloads } = elem

            })
        }).then((array) => {
            // console.log(array)
            let result = array.map(elem => {
                //console.log('result', elem)
                const { webformatURL, largeImageURL, likes, views, comments, downloads } = elem
                return `<div class="photo-card">
                    <img src="${webformatURL}" alt="${tags}" />

                    <div class="stats">
                        <p class="stats-item">
                            <i class="material-icons">thumb_up</i>
            ${likes}
        </p>
                        <p class="stats-item">
                            <i class="material-icons">visibility</i>
            ${views}
        </p>
                        <p class="stats-item">
                            <i class="material-icons">comment</i>
            ${comments}
        </p>
                        <p class="stats-item">
                            <i class="material-icons">cloud_download</i>
            ${downloads}
        </p>
                    </div>
                </div>`
            }).join('')
            list.insertAdjacentHTML('beforeend', result)

        }).catch(err => {
            console.log(err)
        })
        .finally(() => form.reset())

})*/
const onSearchForm = function (e) {
    e.preventDefault()
    searchParam = e.currentTarget.elements.query.value
    console.log(searchParam)
    // console.log('Input result:', e.target.elements.input.value)
    let params = `&q=${searchParam}&page=${pageNumb}&per_page=5&key=${API_KEY}`
    let url = BASE_URL + params

    fetch(url)
        .then((resp) => {
            return resp.json()
        })
        .then(data => {
            return data.hits
        })
        .then(array => {
            let result = array.map(elem => {
                const { webformatURL, largeImageURL, likes, views, comments, downloads } = elem
                return `
            <li class="gallery-item">
            <div class="photo-card">
            <img src="${webformatURL}" loading="lazy" alt="" data-src = "${largeImageURL}"/>
            
            <div class="stats">
            <p class="stats-item">
            <i class="material-icons">thumb_up</i>
            ${likes}
            </p>
            <p class="stats-item">
            <i class="material-icons">visibility</i>
            ${views}
            </p>
            <p class="stats-item">
            <i class="material-icons">comment</i>
            ${comments}
            </p>
            <p class="stats-item">
            <i class="material-icons">cloud_download</i>
            ${downloads}
            </p>
            </div>
            </div>
            </li>
            `
            }).join('')
            list.insertAdjacentHTML('beforeend', result)
        }).catch(err => {
            return alert('Ошибочка🥵', err)
        }).finally(() => form.reset())
}

//=======Button AddEventListener=======
const onloadMoreBtn = function () {
    pageNumb += 1
    let params = `&q=${searchParam}&page=${pageNumb}&per_page=5&key=${API_KEY}`
    let url = BASE_URL + params

    fetch(url)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            return data.hits
        })
        .then(array => {
            let result = array.map(elem => {
                console.log('Result:', elem)
                const { webformatURL, largeImageURL, likes, views, comments, downloads } = elem
                return `
            <li class="gallery-item">
            <div class="photo-card">
            <img src="${webformatURL}" loading="lazy" alt="" data-src = "${largeImageURL}"/>
            
            <div class="stats">
            <p class="stats-item">
            <i class="material-icons">thumb_up</i>
            ${likes}
            </p>
            <p class="stats-item">
            <i class="material-icons">visibility</i>
            ${views}
            </p>
            <p class="stats-item">
            <i class="material-icons">comment</i>
            ${comments}
            </p>
            <p class="stats-item">
            <i class="material-icons">cloud_download</i>
            ${downloads}
            </p>
            </div>
            </div>
            </li>
            `
            }).join('')
            list.insertAdjacentHTML('beforeend', result)
            button.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        })



}
button.addEventListener('click', onloadMoreBtn)
form.addEventListener('submit', onSearchForm)
/*button.addEventListener('click', () => {
    pageNumb += 1
    let params = `&q=${searchParam}&page=${pageNumb}&per_page=5&key=${API_KEY}`
    let url = BASE_URL + params

    fetch(url)
        .then(resp => {
            //console.log(resp)
            return resp.json()
        })
        .then(data => {
            //console.log(data.hits)
            return data.hits
        })
        .then((array) => {
            // console.log(array)
            let result = array.map(elem => {
                // console.log('result', elem)
                const { webformatURL, largeImageURL, likes, views, comments, downloads } = elem
                return `<div class="photo-card">
                    <img src="${webformatURL}" alt="" />

                    <div class="stats">
                        <p class="stats-item">
                            <i class="material-icons">thumb_up</i>
            ${likes}
        </p>
                        <p class="stats-item">
                            <i class="material-icons">visibility</i>
            ${views}
        </p>
                        <p class="stats-item">
                            <i class="material-icons">comment</i>
            ${comments}
        </p>
                        <p class="stats-item">
                            <i class="material-icons">cloud_download</i>
            ${downloads}
        </p>
                    </div>
                </div>`
            }).join('')
            list.insertAdjacentHTML('beforeend', result)
        })
})


//function galleryCreator(item) {
    //cardTemplate(item)
   // return list.insertAdjacentHTML('beforeend', item)
//}*/