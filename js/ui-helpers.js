// js/ui-helpers.js
"use strict";

/**
 * Builds faction switcher buttons inside #factionSwitcher element.
 * @param {Function} onSwitch - callback(factionKey) called on button click
 * @param {string}   defaultFaction - key of initially active faction
 * @param {string}   [filterType] - optional FACTION_TYPE value to show only matching factions
 */
function buildFactionSwitcher(onSwitch, defaultFaction = "lspd", filterType = null) {
  const container = document.getElementById("factionSwitcher");
  if (!container) return;

  container.innerHTML = "";

  const entries = Object.entries(FACTIONS).filter(([, faction]) => filterType === null || faction.type === filterType);

  entries.forEach(([key, faction]) => {
    const btn = document.createElement("button");
    btn.className = "faction-btn" + (key === defaultFaction ? " active" : "");
    btn.dataset.faction = key;

    btn.addEventListener("click", () => {
      // Update active state
      container.querySelectorAll(".faction-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      onSwitch(key);
    });

    if (faction.icon) {
      const img = document.createElement("img");
      img.src = faction.icon;
      img.alt = faction.short;
      img.width = 32;
      img.height = 32;
      btn.appendChild(img);
    }

    btn.appendChild(document.createTextNode(" " + faction.short));
    container.appendChild(btn);
  });

  // "Custom" button
  const customBtn = document.createElement("button");
  customBtn.className = "faction-btn faction-btn--custom";
  customBtn.dataset.faction = "custom";

  const customImg = document.createElement("img");
  customImg.src = "assets/custom.png";
  customImg.alt = "Custom";
  customImg.width = 32;
  customImg.height = 32;
  customBtn.appendChild(customImg);

  customBtn.appendChild(document.createTextNode(" Custom"));

  customBtn.addEventListener("click", () => {
    container.querySelectorAll(".faction-btn").forEach((b) => b.classList.remove("active"));
    customBtn.classList.add("active");
    onSwitch("custom");
  });

  container.appendChild(customBtn);
}

/**
 * Returns true if the faction with given key is a law enforcement faction.
 * @param {string} factionKey
 * @returns {boolean}
 */
function isLawEnforcement(factionKey) {
  return FACTIONS[factionKey]?.type === FACTION_TYPE.POLICE;
}

/**
 * Returns all factions of a given type.
 * @param {string} type - FACTION_TYPE value
 * @returns {Object[]}
 */
function getFactionsByType(type) {
  return Object.entries(FACTIONS)
    .filter(([, f]) => f.type === type)
    .map(([key, f]) => ({ key, ...f }));
}
