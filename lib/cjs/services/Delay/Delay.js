"use strict";
/* PLOP_INJECT_IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delay = void 0;
/**
 *
 * un service/component
 *
 */
function Delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
exports.Delay = Delay;
