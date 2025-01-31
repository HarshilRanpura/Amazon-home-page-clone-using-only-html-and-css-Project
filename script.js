// JavaScript for Amazon clone functionalities

// Scroll to Top functionality
document.querySelector('.foot-panel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Dynamic search bar suggestions (mock data)
  const searchInput = document.querySelector('.search-input');
  const mockSuggestions = ['Laptop', 'Mobile Phone', 'Headphones', 'Camera', 'Books', 'Furniture'];
  const searchBar = document.querySelector('.nav-searchbar');
  
  const suggestionsBox = document.createElement('div');
  suggestionsBox.classList.add('suggestions-box');
  suggestionsBox.style.position = 'absolute';
  suggestionsBox.style.background = 'white';
  suggestionsBox.style.border = '1px solid #ccc';
  suggestionsBox.style.width = '90%';
  suggestionsBox.style.zIndex = '100';
  suggestionsBox.style.display = 'none';
  searchBar.appendChild(suggestionsBox);
  
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = '';
    if (query) {
      const filteredSuggestions = mockSuggestions.filter((item) => item.toLowerCase().includes(query));
      filteredSuggestions.forEach((suggestion) => {
        const suggestionItem = document.createElement('div');
        suggestionItem.textContent = suggestion;
        suggestionItem.style.padding = '8px';
        suggestionItem.style.cursor = 'pointer';
        suggestionItem.addEventListener('click', () => {
          searchInput.value = suggestion;
          suggestionsBox.style.display = 'none';
        });
        suggestionsBox.appendChild(suggestionItem);
      });
      suggestionsBox.style.display = 'block';
    } else {
      suggestionsBox.style.display = 'none';
    }
  });
  
  // Sign-In dropdown menu
  const signInElement = document.querySelector('.nav-signin');
  const dropdownMenu = document.createElement('div');
  dropdownMenu.style.position = 'absolute';
  dropdownMenu.style.background = 'white';
  dropdownMenu.style.padding = '10px';
  dropdownMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  dropdownMenu.style.display = 'none';
  dropdownMenu.innerHTML = `
    <p>Welcome to Amazon</p>
    <button>Sign In</button>
    <a href="#">Create your Amazon account</a>
  `;
  signInElement.style.position = 'relative';
  signInElement.appendChild(dropdownMenu);
  
  signInElement.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
  });
  signInElement.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
  });
  
  // Cart alert
  document.querySelector('.nav-cart').addEventListener('click', () => {
    alert('Your cart is empty!');
  });
  
  // Product hover effect
  document.querySelectorAll('.images').forEach((image) => {
    image.addEventListener('mouseenter', () => {
      image.style.transform = 'scale(1.1)';
      image.style.transition = 'transform 0.3s';
    });
    image.addEventListener('mouseleave', () => {
      image.style.transform = 'scale(1)';
    });
  });
  