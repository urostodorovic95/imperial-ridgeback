// Load translations from external JSON file
let translations = {};

// Fetch translations dynamically
fetch('assets/translations.json')
    .then(response => response.json())
    .then(data => {
        translations = data;

        // Load the user's preferred language or default to English
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
        loadLanguage(preferredLanguage);

        // Attach event listener to the language selector
        document.getElementById('language-selector').addEventListener('change', (e) => {
            loadLanguage(e.target.value);
        });
    })
    .catch(error => {
        console.error('Error loading translations:', error);
    });

// Function to load language and update the DOM
const loadLanguage = (lang) => {
    // Save the language selection locally
    localStorage.setItem('preferredLanguage', lang);

    // Update all elements dynamically
    if (translations[lang]) {
        Object.keys(translations[lang]).forEach(key => {
            const element = document.getElementById(key);
            if (element) element.textContent = translations[lang][key];
        });
    }

    // Set the selected value in the dropdown
    document.getElementById('language-selector').value = lang;
};
