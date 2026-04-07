fetch('../data/top10_esi.json')
  .then(response => response.json())
  .then(data => {
    // Display calculated_at date
    if (data.calculated_at) {
      document.getElementById('last-updated').textContent = `Rankings last calculated: ${data.calculated_at}`;
    }

    // Render planets from results array
    const container = document.querySelector('.top10-list');
    data.results.forEach(planet => {
      const item = document.createElement('p');
      item.className = 'exoplanet-item';
      item.textContent = `${planet.rank}. ${planet.pl_name} — ESI: ${planet.esi.toFixed(3)}`;
      container.appendChild(item);
    });
  })
  .catch(err => console.error('Error loading top10 JSON:', err));