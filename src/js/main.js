import dropdown from "./modules/dropdown";
import playpause from "./modules/playpause";


window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    playpause('.clock__progressbar-button', '.clock__progressbar-ring-circle');
    dropdown('.header__lang-dropdown-button', '.header__lang-dropdown-content');
});