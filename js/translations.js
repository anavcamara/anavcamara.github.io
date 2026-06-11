const languageButton = document.getElementById("language-toggle");

const pageTitles = {
    "index.html": {
        pt: "Ana Luiza Câmara | Portfólio",
        en: "Ana Luiza Câmara | Portfolio"
    },

    "sobre.html": {
        pt: "Sobre | Ana Luiza Câmara",
        en: "About | Ana Luiza Câmara"
    },

    "habilidades.html": {
        pt: "Habilidades | Ana Luiza Câmara",
        en: "Skills | Ana Luiza Câmara"
    },

    "projetos.html": {
        pt: "Projetos | Ana Luiza Câmara",
        en: "Projects | Ana Luiza Câmara"
    },

    "contato.html": {
        pt: "Contato | Ana Luiza Câmara",
        en: "Contact | Ana Luiza Câmara"
    }
};

let currentLanguage =
    localStorage.getItem("language") || "pt";

function translatePage(language) {

    document.body.classList.add("fade-translate");

    setTimeout(() => {

        document.querySelectorAll("[data-pt]").forEach(element => {

            element.textContent =
                element.dataset[language];

        });

        if (languageButton) {

            languageButton.textContent =
                language === "pt"
                    ? "EN"
                    : "PT";

        }

        document.documentElement.lang =
            language === "pt"
                ? "pt-BR"
                : "en";

        const currentPage =
            window.location.pathname.split("/").pop();

        if (pageTitles[currentPage]) {

            document.title =
                pageTitles[currentPage][language];

        }

        localStorage.setItem(
            "language",
            language
        );

        document.body.classList.remove(
            "fade-translate"
        );

    }, 150);
}

if (languageButton) {

    translatePage(currentLanguage);

    languageButton.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "pt"
                ? "en"
                : "pt";

        translatePage(currentLanguage);

    });

}