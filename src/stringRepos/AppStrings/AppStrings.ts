
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_IMPORT */
import { I18n } from 'i18n-js';

/**
 *
 * Cette fonction initialise les parmètres par défaut du répertoire de strings.
 * Cette fonction retourne le répertoire de strings, loaded et initialized.
 * */
const AppStrings = () => {
  const i18n = new I18n({
    src: {
      /* PLOP_INJECT_SRC_STRING */
      "xhpzrpkYg": "The program:",
      "xl4Ab8WU": "\"File upload in progress! Please wait, darling...\"",
      "xhpzrpkY": "The function:",
      "xziOfYCt": "Result:",
      "xcCehb3i": "Code:",
      "xLFuFy6p": "Failed request...",
      "xFN0o4dh": "Result:",
      "x3ezGsvB": "Request successfully completed!",
      "xKMRBTG": "A.I. model used:",
      "xDWbf3WQ": "Selected A.I. model:",
      "welcome": "Hello",
      "country": "The string 'fr' does not require translation as it appears to be a language code for French.",
      "x7CTz5XP": "Translation of object in progress...",
      "xWtfTMu": "Text translation in progress.... Please wait...",
      "x8H4nyVx": "Tentative No.",
      "xlqZy0Sf": "Text translation successful!",
      "xlqky0Sfn3": "Unable to translate this text",
      "xlqkylp0Sfn3": "An error has occurred",
      
      /* PLOP_INJECT_SRC_END */
    },
    /* PLOP_INJECT_INTL_STRINGS */
  });

  // Set the locale once
  // at the beginning of your app.
  i18n.locale = Intl.DateTimeFormat().resolvedOptions().locale;
  i18n.defaultLocale = 'src';

  // When a value is missing from a language,
  // it'll fallback to another language with the key present.
  i18n.enableFallback = true;

  return i18n;
};

/**
 *
 * Bonjour, Holà, Hello,
 *
 * Ci dessous, se trouve une bibliothèque de strings
 * multilingues.
 *
 * ce petit bébé, nommé i18n,
 * contient les strings, ze graal, ze caviar kush champagne !
 * cet objet est destiné à être exporté et réutilisé
 * partout dans ton application !
 *
 */
const app_strings = AppStrings();

export { AppStrings, app_strings };
