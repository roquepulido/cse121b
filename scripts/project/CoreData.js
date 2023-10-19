/**
 * Object to contain all the information of the countries of the game.
 */
const CoreData = {
  /**
   * Array with the name, capital and flag of the countries of the API.
   */
  countriesInfo: [],
  /**
   * Map JSON to an array of object countries extracting the name, capital and flag.
   *
   * @param countriesJson Information getted by the API
   * @returns array countries
   */
  extractFromJsonToGameArray(countriesJson) {
    return countriesJson.map((country) => {
      return {
        countryName: country.name.common,
        capital: country.capital,
        flagSvg: country.flags.svg,
      };
    });
  },
  initGameCore(countriesJson) {
    this.countriesInfo.push(...this.extractFromJsonToGameArray(countriesJson));
    console.info(`Getted ${this.countriesInfo.length} countries.`);
  },
  getQuestionsData() {
    const questions = [];
    let isCapitalQuestion = false;
    if (this.getRandomNumber(2) === 1) isCapitalQuestion = true;
    questions.push(...this.getOptionRandomCountries());
    return { isCapitalQuestion, questions };
  },
  getRandomNumber(max = this.countriesInfo.length) {
    return Math.floor(Math.random() * max);
  },

  getRandomCountry() {
    return this.countriesInfo[this.getRandomNumber()];
  },
  getOptionRandomCountries() {
    const options = [];
    for (let i = 0; i < 4; i++) {
      options.push(this.getRandomCountry());
    }
    return options;
  },
};

export default CoreData;
