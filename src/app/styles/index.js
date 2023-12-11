import main from "./theme/main";
import dark from "./theme/dark";


const themeMap = {
    default: main,
    dark
}
const getThemes = (themeName) => {
    return themeName === 'default'
        ? getDefaultThemes()
        : getSettingThemes(themeName);

}
const getDefaultThemes = (themeName) => {
    return themeMap[themeName] || themeMap['default'];
}
const getSettingThemes = (themeName) => {
    return themeName === 'dark'
        ? themeMap[`${themeName}dark`] || themeMap['dark']
        : themeMap[themeName];

}
export const getThemeName = (themeName, enableDefault) => {
    if (enableDefault) {
        return themeName === 'default' ? 'dark' : `${themeName}dark`
    }
    return themeName;
}
export default getThemes