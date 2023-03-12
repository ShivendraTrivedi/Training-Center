// Module data
const modules = [
  {
    title: 'Module 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget leo ornare, efficitur tellus non, venenatis mi. Nam ac arcu et neque sodales maximus ut in lorem.',
    repository: '#',
    page: '#',
    playlist: '#',
    status: 'stable',
    image: 'https://picsum.photos/id/100/150/150'
  },
  {
    title: 'Module 2',
    description: 'Integer sit amet feugiat nibh. Mauris suscipit nunc sed ante molestie vestibulum. Donec efficitur eleifend dui at viverra. Nulla facilisi. Vestibulum vel hendrerit libero.',
    repository: '#',
    page: '#',
    playlist: '#',
    status: 'beta',
    image: 'https://picsum.photos/id/200/150/150'
  },
  {
    title: 'Module 3',
    description: 'Duis vestibulum ligula eu enim vulputate malesuada. Nulla in ligula mauris. Praesent ut odio sed nulla euismod laoreet. Nam ut sapien enim. Nam scelerisque ligula a sapien consectetur, ut dapibus lectus ultrices.',
    repository: '#',
    page: '#',
    playlist: '#',
    status: 'alpha',
    image: 'https://picsum.photos/id/300/150/150'
  },
  {
    title: 'Module 4',
    description: 'Aliquam nec dolor eu ipsum ultricies iaculis. Nulla pulvinar, ex non euismod malesuada, ipsum lacus fringilla arcu, eget aliquet sapien velit sed metus. Nunc a nunc metus. Integer consequat augue eget risus pulvinar malesuada.',
    repository: '#',
    page: '#',
    playlist: '#',
    status: 'stable',
    image: 'https://picsum.photos/id/400/150/150'
  }
];

// Function to display modules
function displayModules(modules) {
  const moduleContainer = document.querySelector('#module-container');

  // Clear previous content
  moduleContainer.innerHTML = '';

  // Filter modules by status and videos
  const statusFilter = document.querySelector('#status-filter').value;
  const videosFilter = document.querySelector('#videos-filter').checked;
  let filteredModules = modules.filter(module => module.status === statusFilter);
  if (videosFilter) {
    filteredModules = filteredModules.filter(module => module.playlist !== '#');
  }

  // Display modules
  filteredModules.forEach(module => {
    // Create module element
    const moduleElement = document.createElement('div');
    moduleElement.classList.add('module');

    // Add module image
    const imageElement = document.createElement('img');
    imageElement.src = module.image;
    imageElement.alt = `Image for ${module.title} module`;
    imageElement.classList.add('module-image');
    moduleElement.appendChild(imageElement);

    // Add module info
    const infoElement = document.createElement('div');
    infoElement.classList.add('module-info');

    // Add module title
    const titleElement = document.createElement('h2');
    titleElement.innerText = module.title;
    titleElement.classList.add('module-title');
    infoElement.appendChild(titleElement);

    // Add module description
    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = module.description;
    descriptionElement.classList.add('module-description');
    infoElement.appendChild(descriptionElement);

    // Add module links
    const linksElement = document.createElement('div');
    linksElement.classList.add('module-links');

    // Add repository link
    const repositoryElement = document.createElement('a');
    repositoryElement.href = module.repository;
    repositoryElement.target = '_blank';
    repositoryElement.innerText = 'Repository';
    repositoryElement.classList.add('module-link');
    linksElement.appendChild(repositoryElement);

    // Add page link
    const pageElement = document.createElement('a');
    pageElement.href = module.page;
    pageElement.target = '_blank';
    pageElement.innerText = 'Page';
    pageElement.classList.add('module-link');
    linksElement.appendChild(pageElement);

    // Add playlist link
    if (module.playlist !== '#') {
      const playlistElement = document.createElement('a');
      playlistElement.href = module.playlist;
      playlistElement.target = '_blank';
      playlistElement.innerText = 'Playlist';
      playlistElement.classList.add('module-link');
      linksElement.appendChild(playlistElement);
    }

    infoElement.appendChild(linksElement);

    // Add module status
    const statusElement = document.createElement('div');
    statusElement.classList.add('module-status');
    switch (module.status) {
      case 'stable':
        statusElement.innerText = 'Stable';
        statusElement.classList.add('stable');
        break;
      case 'beta':
        statusElement.innerText = 'Beta';
        statusElement.classList.add('beta');
        break;
      case 'alpha':
        statusElement.innerText = 'Alpha';
        statusElement.classList.add('alpha');
        break;
      default:
        break;
    }
    infoElement.appendChild(statusElement);

    moduleElement.appendChild(infoElement);
    moduleContainer.appendChild(moduleElement);

  });
}

// Add event listeners to filters
const statusFilter = document.querySelector('#status-filter');
statusFilter.addEventListener('change', () => {
  displayModules(modules);
});

const videosFilter = document.querySelector('#videos-filter');
videosFilter.addEventListener('change', () => {
  displayModules(modules);
});

// Display modules on load
displayModules(modules);

// Get DOM elements
const filterStatus = document.getElementById("filter-status");
const filterVideos = document.getElementById("filter-videos");
modules = document.getElementsByClassName("module");

// Filter modules based on status and video availability
function filterModules() {
const status = filterStatus.value;
const hasVideo = filterVideos.checked;

for (let i = 0; i < modules.length; i++) {
const module = modules[i];
const moduleStatus = module.dataset.status;
const moduleHasVideo = module.dataset.hasVideo === "true";
if ((status === "all" || moduleStatus === status) && (!hasVideo || moduleHasVideo)) {
  module.style.display = "flex";
} else {
  module.style.display = "none";
}
}
}

// Add event listeners to filters
filterStatus.addEventListener("change", filterModules);
filterVideos.addEventListener("change", filterModules);

// Initial filter
filterModules();

