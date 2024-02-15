"use strict";
/* PLOP_INJECT_IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryParse = void 0;
/**
 *
 * un service/component
 *
 */
const TryParse = (txt) => {
    /* PLOP_INJECT_CODE */
    try {
        return JSON.parse(txt === null || txt === void 0 ? void 0 : txt.trim());
    }
    catch (e) {
        return null;
    }
};
exports.TryParse = TryParse;
