/* PLOP_INJECT_IMPORT */

/**
 *
 * un service/component
 *
 */
const TryParse = (txt: any) => {
  /* PLOP_INJECT_CODE */
  try {
    return JSON.parse(txt?.trim());
  } catch (e) {
    return null;
  }
};

export { TryParse };
