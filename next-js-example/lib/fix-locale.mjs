import * as fs from "fs";
function getTranslation(langCode) {
    const fileData = fs
        .readFileSync(`./dictionaries/${langCode}.json`)
        .toString();
    return JSON.parse(fileData);
}

function setTranslation(langCode, translations) {
    fs.writeFileSync(
        `./dictionaries/${langCode}.json`,
        JSON.stringify(translations, void 0, 4) + "\n",
    );
}

function pickUtilityKeys(translation) {
    const res = {};

    Object.keys(translation).forEach((key) => {
        if (key.startsWith("__")) res[key] = translation[key];
    });

    return res;
}

function getCache(keysCache, key, fullPath) {
    if (keysCache[key] !== void 0) return keysCache[key];
    if (keysCache[fullPath] !== void 0) return keysCache[fullPath];

    if (fullPath.endsWith(".index")) {
        const prevPathSegment = fullPath.split(".").at(-2);
        if (keysCache[prevPathSegment]) return keysCache[prevPathSegment];
    }
}

function getI18FromPath(fullPath) {
    const withSpaces = fullPath.split(".").join(" ");
    // capitalizing
    return withSpaces[0].toUpperCase() + withSpaces.slice(1);
}

function processLangs(path, obj, sourceLang = {}, keysCache = {}) {
    const result = pickUtilityKeys(sourceLang);

    // caching all keys from the sourceLang to restore it in case path was changed
    Object.keys(sourceLang).forEach((key) => {
        if (typeof sourceLang[key] === "string") {
            keysCache[key] = sourceLang[key];
        }
    });

    Object.keys(obj)
        .sort()
        .forEach((key) => {
            const pathWithSep = path ? `${path}.` : "";
            const fullPath = `${pathWithSep}${key}`;
            if (Array.isArray(obj[key])) {
                result[key] = sourceLang[key];
            } else if (typeof obj[key] === "object") {
                result[key] = processLangs(
                    fullPath,
                    obj[key],
                    sourceLang[key],
                    keysCache,
                );
            } else {
                if (sourceLang[key] === void 0) {
                    console.log("key not found", fullPath, obj[key]);
                }
                result[key] =
                    (sourceLang[key]) ?? obj[key];
            }
        });

    return result;
}

function fixNamespace() {
    const files = fs.readdirSync("./dictionaries")
    const keysCache = {};
    files.forEach((el)=> {
        keysCache[el.replace(".json", "")] = {}
    })

    const translationByLang = {};

    Object.keys(keysCache).forEach((lang)=> {
        translationByLang[lang] = getTranslation(lang)
    })

    if (!translationByLang.en) {
        throw new Error("ENGLISH PLS")
    }

    Object.keys(translationByLang).forEach((lang) => {
        console.log(`ordering ${lang} keys`);
        const newLang = processLangs(
          "",
          translationByLang.en,
          translationByLang[lang],
          keysCache[lang],
        );
        console.log(lang + " keys ordered");
        setTranslation(lang, newLang);
    })
}

fixNamespace();
