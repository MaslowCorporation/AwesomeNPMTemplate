/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} func
 * la fonction à exécuter, si existante
 *
 * @param {*} args
 * le(s) arguments de cette fonction, ou null, si 0 args
 *
 * @returns ce que la fonction retourne, si fonction existe, ou null
 *
 * Cette fonction permet d'exécuter une fonction si elle existe.
 */
interface RunIfPossibleParams {
  func?: any;
  args?: any;
}

const RunIfPossible = async ({
  func,
  args,
}: RunIfPossibleParams): Promise<any | null> => {
  if (func != null) {
    if (args != null) {
      return func(args);
    } else {
      return func();
    }
  } else {
    return null;
  }
};

export { RunIfPossible };
