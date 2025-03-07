// Liste des armes avec leur traduction en français et en anglais
const weapons = {
    "Sword of Justice": {
        translationFR: "Épée de la Justice",
        translationEN: "Sword of Justice"
    },
    "Great Hammer": {
        translationFR: "Grand Marteau",
        translationEN: "Great Hammer"
    },
    "War Bow": {
        translationFR: "Arc de Guerre",
        translationEN: "War Bow"
    },
    "Claymore": {
        translationFR: "Claymore",
        translationEN: "Claymore"
    },
    "Quarterstaff": {
        translationFR: "Bâton de Quart",
        translationEN: "Quarterstaff"
    }
};

// Fonction pour rechercher l'arme et afficher ses traductions
function searchWeapon() {
    const weaponName = document.getElementById("searchBar").value;
    const resultElement = document.getElementById("result");
    const weaponData = weapons[weaponName];

    // Si l'arme est trouvée
    if (weaponData) {
        document.getElementById("weaponName").textContent = `Nom de l'arme: ${weaponName}`;
        document.getElementById("translationFR").textContent = `Traduction en français: ${weaponData.translationFR}`;
        document.getElementById("translationEN").textContent = `Traduction en anglais: ${weaponData.translationEN}`;
    } else {
        document.getElementById("weaponName").textContent = "Aucune arme trouvée.";
        document.getElementById("translationFR").textContent = "";
        document.getElementById("translationEN").textContent = "";
    }
}
