// script.js
const apiKey = 'm0vUKDs9aGq-aaaNkfoUTUDqPeVN3jI0BS_6XrCJMDQ';
const inputE1 = document.querySelector(".inputBox");
const showMore = document.querySelector(".showMore");
const searchResults = document.querySelector(".main");
const searchForm = document.querySelector("#searchForm");
let inputData = '';
let page = 2;

async function searchImages() {
    inputData = inputE1.value.trim();
    if (!inputData) return;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data)
        const results = data.results;

        if (page === 1) {
            searchResults.innerHTML = ''; // Clear results for a new search
        }

        results.forEach((result) => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add("imageBox");

            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description || 'Image';

            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = '_blank';
            imageLink.textContent = result.alt_description || 'View Image';

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResults.appendChild(imageWrapper);
        });

        page++;
        if (searchResults.innerHTML!='') {
            showMore.style.display = 'block'; // Show Load More button if results exist
        } else {
            showMore.style.display = 'none'; // Hide if no results
        }
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

// Event listener for the search form
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1; // Reset page for a new search
    searchImages();
});

// Event listener for the Load More button
showMore.addEventListener('click', () => {
    searchImages();
});
