import ISO6391 from "iso-639-1";

// TODO: remove and use function in lib/i18n/iso6391
export const getLanguageCode = (languageName: string) => {
  const code = ISO6391.getCode(languageName);
  if (!code) {
    throw new Error("Unknown language: " + languageName);
  }
  return code;
};
