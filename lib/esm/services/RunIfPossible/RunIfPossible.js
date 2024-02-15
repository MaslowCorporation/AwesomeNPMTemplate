/* PLOP_INJECT_IMPORT */
//import React from "react";
const RunIfPossible = async ({ func, args, }) => {
    if (func != null) {
        if (args != null) {
            return func(args);
        }
        else {
            return func();
        }
    }
    else {
        return null;
    }
};
export { RunIfPossible };
