declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false;
    }
}
declare function InitAppStrings(): import("i18next").i18n;
declare const app_strings: import("i18next").i18n;
export { InitAppStrings, app_strings };
//# sourceMappingURL=AppStrings.d.ts.map