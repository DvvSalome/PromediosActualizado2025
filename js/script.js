function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('themeButton');
    body.classList.toggle('bg-gradient-to-r');
    body.classList.toggle('from-blue-500');
    body.classList.toggle('to-purple-600');
    body.classList.toggle('bg-gray-100');
    body.classList.toggle('text-gray-900');
    if (body.classList.contains('bg-gray-100')) {
        themeButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
}