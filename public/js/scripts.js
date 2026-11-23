
/* =====================================
   SNEAKERVAULT - FRONTEND JAVASCRIPT
===================================== */

// Get HTML elements
const sneakerContainer = document.getElementById('sneakerContainer');
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');

// Store sneaker data
let allSneakers = [];


/* =====================================
   FETCH SNEAKERS FROM BACKEND API
===================================== */

async function fetchSneakers() {

    try {

        const response = await fetch('/api/sneakers');

        if (!response.ok) {
            throw new Error('Unable to fetch sneaker data');
        }

        allSneakers = await response.json();

        console.log('Sneakers loaded successfully:', allSneakers);

        displaySneakers(allSneakers);

    } catch (error) {

        sneakerContainer.innerHTML =
            '<p class="loading">Unable to load sneakers. Please try again.</p>';

        console.error('API Error:', error);

    }

}


/* =====================================
   DISPLAY SNEAKER CARDS
===================================== */

function displaySneakers(sneakers) {

    sneakerContainer.innerHTML = '';

    if (sneakers.length === 0) {

        sneakerContainer.innerHTML =
            '<p class="loading">No sneakers found.</p>';

        return;
    }

    sneakers.forEach(sneaker => {

        const card = `
            <div class="col s12 m6 l4">

                <div class="sneaker-card">

                    <div class="sneaker-image">

                        <img
                            src="${sneaker.image}"
                            alt="${sneaker.name}"
                            loading="lazy"
                        >

                    </div>

                    <div class="sneaker-info">

                        <p class="sneaker-brand">
                            ${sneaker.brand}
                        </p>

                        <h5>${sneaker.name}</h5>

                        <p class="sneaker-category">
                            ${sneaker.category}
                        </p>

                        <p class="sneaker-price">
                            ₹${sneaker.price.toLocaleString('en-IN')}
                        </p>

                        <button
                            class="details-btn"
                            onclick="showDetails(${sneaker.id})"
                        >
                            VIEW DETAILS
                        </button>

                    </div>

                </div>

            </div>
        `;

        sneakerContainer.innerHTML += card;

    });

}


/* =====================================
   SEARCH AND BRAND FILTER
===================================== */

function filterSneakers() {

    const searchTerm = searchInput.value.toLowerCase();

    const selectedBrand = brandFilter.value;

    const filteredSneakers = allSneakers.filter(sneaker => {

        const matchesSearch =
            sneaker.name.toLowerCase().includes(searchTerm) ||
            sneaker.brand.toLowerCase().includes(searchTerm);

        const matchesBrand =
            selectedBrand === 'All' ||
            sneaker.brand === selectedBrand;

        return matchesSearch && matchesBrand;

    });

    displaySneakers(filteredSneakers);

}


/* =====================================
   VIEW SNEAKER DETAILS
===================================== */

function showDetails(id) {

    const sneaker = allSneakers.find(item => item.id === id);

    if (sneaker) {

        alert(
            `Sneaker: ${sneaker.name}\n` +
            `Brand: ${sneaker.brand}\n` +
            `Category: ${sneaker.category}\n` +
            `Colour: ${sneaker.color}\n` +
            `Price: ₹${sneaker.price.toLocaleString('en-IN')}\n\n` +
            `${sneaker.description}`
        );

    }

}


/* =====================================
   EVENT LISTENERS
===================================== */

searchInput.addEventListener('input', filterSneakers);

brandFilter.addEventListener('change', filterSneakers);


/* =====================================
   INITIALIZE APPLICATION
===================================== */

document.addEventListener('DOMContentLoaded', () => {
    fetchSneakers();
});