const playlistFilter = document.getElementById('playlist-filter');
const statusFilter = document.getElementById('status-filter');
const modules = document.querySelectorAll('.module');

playlistFilter.addEventListener('change', filterModules);
statusFilter.addEventListener('change', filterModules);

function filterModules() {
  const playlistValue = playlistFilter.value;
  const statusValue = statusFilter.value;

  modules.forEach((module) => {
    const hasPlaylist = module.querySelector('ul li:nth-child(3) a');
    const status = module.querySelector('.status');

    if (playlistValue === 'yes'&& (!hasPlaylist || hasPlaylist === null)) {
        module.style.display = 'none';
        } else if (playlistValue === 'no' && hasPlaylist) {
        module.style.display = 'none';
        } else {
        module.style.display = 'block';
        }if (statusValue !== 'all' && status.classList.contains(statusValue) === false) {
            module.style.display = 'none';
          }
        });
    }          