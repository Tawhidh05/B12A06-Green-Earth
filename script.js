// Loading Categories
const loadCategory = () => {
  const url = `https://openapi.programming-hero.com/api/categories`;

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    displayCategory(data.categories);
  })
  .catch(error => console.error("Error loading categories:", error));
};

// Load Trees by Category ID
const loadTrees = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;

  fetch(url)
  .then((res) =>  res.json())
  .then((data) => {
    displayPlants(data.plants);
  })
  .catch(error => console.error(`Error loading trees for category ${id}:`, error));
};

// Loading All Plants
const loadingPlants = () => {
  const url = `https://openapi.programming-hero.com/api/plants`;

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    displayPlants(data.plants);
  })
  .catch(error => console.error("Error loading plants:", error));
};

// Loading Plant Details
const loadPlantDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;

  fetch(url)
  .then((res) => res.json())
  .then((data) => displayInfo(data.plants));
}

// Display Categories
const displayCategory = (categories) => {
  const disCat = document.getElementById("display-categories");
  disCat.innerHTML = `
    <p class="py-1 hover:bg-green-50 rounded px-2 text-sm sm:text-base cursor-pointer">
      <a onclick="loadingPlants()">All Trees</a>
    </p>
  `;

  for (let cat of categories) {
    const displayCategories = document.createElement("div");
    displayCategories.innerHTML = `
      <p class="py-1 hover:bg-green-50 rounded px-2 text-sm sm:text-base cursor-pointer">
        <a onclick="loadTrees(${cat.id})">${cat.category_name}</a>
      </p>
    `;
    disCat.append(displayCategories);
  }
};



// Display Plants
const displayPlants = (plants) => {
  const showTrees = document.getElementById("TreeCards");
  showTrees.innerHTML = "";

  if (!plants || !Array.isArray(plants) || plants.length === 0) {
    showTrees.innerHTML = "<p class='text-center w-full'>No plants found for this category.</p>";
    return;
  }

  for (let plat of plants) {
    const plant = document.createElement("div");
    plant.className = "bg-white rounded-lg shadow-md overflow-hidden";
    plant.innerHTML = `
      <figure class="h-32 sm:h-48 w-full p-2 sm:p-4 rounded-t-xl overflow-hidden">
        <img src="${plat.image || 'https://placehold.co/600x400'}" alt="${plat.name}" class="w-full h-full object-cover rounded-lg">
      </figure>
      <div class="p-3 sm:p-4">
        <h2 class="card-title text-base sm:text-lg font-semibold plat-name cursor-pointer" onclick="loadPlantDetails(${plat.id})" data-id="${plat.id}">${plat.name}</h2>
        <p class="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">${plat.description || 'No description available.'}</p>
        <div class="flex justify-between items-center mb-2 sm:mb-3">
          <span class="badge rounded-xl bg-[#DCFCE7] text-green-800 text-xs sm:text-sm px-2 sm:px-3 py-1">${plat.category || 'Uncategorized'}</span>
          <span class="font-semibold text-sm sm:text-base">৳${plat.price || '500'}</span>
        </div>
        <button class="btn w-full bg-green-800 sm:w-auto text-white rounded-full font-normal add-to-cart" data-id="${plat.id}" data-name="${plat.name}" data-price="${plat.price || '500'}">Add to Cart</button>
      </div>
    `;
    showTrees.append(plant);
  }
};




const displayInfo = (plants) => {
  const detailCon = document.getElementById("plant-details");
  detailCon.innerHTML = `
    <div class="space-y-2">
      <h1 class="text-left font-bold text-2xl">${plants.name}</h1>
      <img src="${plants.image}" alt="">
      <div class="badge badge-success">${plants.category}</div>
    </div>
  `;
  document.getElementById("my_modal_2").showModal();
};


// Initialize
loadCategory();
loadingPlants();

