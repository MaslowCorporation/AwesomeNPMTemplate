/* PLOP_INJECT_IMPORT */

/**
 *
 * un service/component
 *
 */
function Delay(ms: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export { Delay };
