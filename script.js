// Liste simple de traductions pour les armes
const weapons = {
    "Sword of Justice": "Épée de la Justice",
    "Great Hammer": "Grand Marteau",
    "War Bow": "Arc de Guerre",
    "Claymore": "Claymore",
    "Quarterstaff": "Bâton de Quart"
};

// Fonction de recherche
function searchWeapon() {
    const weaponName = document.getElementById("searchBar").value;
    const resultElement = document.getElementById("result");
    const weaponTranslation = weapons[weaponName];

    if (weaponTranslation) {
        document.getElementById("weaponName").textContent = `Nom de l'arme: ${weaponName}`;
        document.getElementById("translation").textContent = `Traduction: ${weaponTranslation}`;
    } else {
        document.getElementById("weaponName").textContent = "Aucune arme trouvée.";
        document.getElementById("translation").textContent = "";
    }
}
