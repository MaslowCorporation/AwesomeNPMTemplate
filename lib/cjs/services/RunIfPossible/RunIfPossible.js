"use strict";
/* PLOP_INJECT_IMPORT */
//import React from "react";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunIfPossible = void 0;
const RunIfPossible = ({ func, args, }) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.RunIfPossible = RunIfPossible;
