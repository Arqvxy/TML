const speciesGallery = document.getElementById('speciesGallery');
const accessSpecies = document.getElementById('accessSpecies');
const commandsDiv = document.getElementById('commands');
const commandList = document.getElementById('commandList');
const lineageGallery = document.getElementById('lineageGallery');
const backButton = document.getElementById('backButton');

// Data: Species, Lineages, and Commands
const speciesData = {
    'pentagram.png': {
        name: 'Bruxa',
        lineages: {
            'Linhagem Vespera': [
                '!ossox @mention (quebrar pescoço)',
                '!ictus @mention (empurrar telecineticamente)'
            ],
            'Linhagem Bennett': [
                '!ignite @mention (fogo mágico)',
                '!drain @mention (drenar energia)'
            ],
            'Linhagem Mikaelson': [
                '!curse @mention (lançar maldição)',
                '!luna @mention (encanto lunar)'
            ],
        }
    },
    'vampire.png': {
        name: 'Vampiro',
        lineages: {
            'Linhagem Original': [
                '!fangs @mention (morder pescoço)',
                '!shadow @mention (sumir nas sombras)'
            ],
            'Linhagem Salvatori': [
                '!compel @mention (compelir)',
                '!speed (super velocidade)'
            ],
            'Linhagem Daeva': [
                '!thirst @mention (sede insaciável)',
                '!stealth (espreitar silenciosamente)'
            ]
        }
    },
    'werewolf.png': {
        name: 'Lobisomem',
        lineages: {
            'Linhagem Alpha': [
                '!howl (uivar)',
                '!claws @mention (golpe com garras)'
            ],
            'Linhagem Moonborn': [
                '!shift (transformação)',
                '!frenzy @mention (ataque em frenesi)'
            ],
            'Linhagem Bloodfang': [
                '!hunt (caça implacável)',
                '!rage (aumento de força)'
            ]
        }
    },
    'siphoner.webp': {
        name: 'Sifonador',
        lineages: {
            'Linhagem Mystic': [
                '!absorb @mention (absorver magia)',
                '!nullify @mention (anular feitiço)'
            ],
            'Linhagem Voidborn': [
                '!drainlife @mention (drenar vitalidade)',
                '!darkflare (explosão sombria)'
            ]
        }
    },
    'heretic.webp': {
        name: 'Herege',
        lineages: {
            'Linhagem Forsaken': [
                '!ignite @mention (fogo mágico)',
                '!drain @mention (drenar energia)'
            ],
            'Linhagem Cursedblood': [
                '!bloodfire (sangue ardente)',
                '!haunt (assombrar o alvo)'
            ]
        }
    },
    'hybrid.webp': {
        name: 'Híbrido',
        lineages: {
            'Linhagem Chimera': [
                '!shift (transformação rápida)',
                '!fusion @mention (fusão de poderes)'
            ],
            'Linhagem Eclipse': [
                '!shadowstep (passo sombrio)',
                '!moonblast (explosão lunar)'
            ]
        }
    },
    'tribrid.webp': {
        name: 'Tríbrido',
        lineages: {
            'Linhagem Triumvirate': [
                '!chaos @mention (caos místico)',
                '!fusion @mention (fusão de poderes)'
            ],
            'Linhagem Eternal': [
                '!lifebond @mention (vínculo vital)',
                '!essence (essência pura)'
            ]
        }
    },
    'werewitch.webp': {
        name: 'Lobisomem Bruxo',
        lineages: {
            'Linhagem Lunalight': [
                '!luna @mention (encanto lunar)',
                '!curse @mention (lançar maldição)'
            ],
            'Linhagem Shadowfang': [
                '!darkclaw (garra sombria)',
                '!hex @mention (lançar feitiço)'
            ]
        }
    }
};

// Show lineages for a selected species
function showLineages(species) {
    speciesGallery.classList.add('hidden');
    lineageGallery.innerHTML = '';
    lineageGallery.classList.remove('hidden');

    const lineages = speciesData[species].lineages;
    Object.keys(lineages).forEach(lineage => {
        const button = document.createElement('button');
        button.textContent = lineage;
        button.className = 'button';
        button.addEventListener('click', () => showCommands(lineages[lineage]));

        lineageGallery.appendChild(button);
    });
}

// Show commands for a selected lineage
function showCommands(commands) {
    lineageGallery.classList.add('hidden');
    commandsDiv.classList.remove('hidden');
    commandList.innerHTML = '';
    commands.forEach(command => {
        const li = document.createElement('li');
        li.textContent = command;
        commandList.appendChild(li);
    });
}

// Back to species gallery
backButton.addEventListener('click', () => {
    commandsDiv.classList.add('hidden');
    lineageGallery.classList.add('hidden');
    speciesGallery.classList.remove('hidden');
});
// Load species
function loadSpecies() {
    speciesGallery.innerHTML = '';
    Object.keys(speciesData).forEach(species => {
        const img = document.createElement('img');
        img.src = `images/${species}`;
        img.alt = speciesData[species].name;
        img.addEventListener('click', () => showLineages(species));
        speciesGallery.appendChild(img);
    });
    speciesGallery.classList.remove('hidden');
    accessSpecies.style.display = 'none'; // Hide the button
}

// Initialize
accessSpecies.addEventListener('click', loadSpecies);
