
function CountryDescription({country}) {
    return (
      <div className="countryData">
        <img className="flag" src={country.flag} />
        <table>
          <tbody>
            <tr>
              <td>Common name:</td>
              <td>{country.commonName}</td>
            </tr>
            <tr>
              <td>Official name:</td>
              <td>{country.officialName}</td>
            </tr> 
            <tr>
              <td>Native name:</td>
              <td>{country.nativeName}</td>
            </tr>
            <tr>
              <td>Subregion:</td>
              <td>{country.subregion}</td>
            </tr>
            <tr>
              <td>Population:</td>
              <td>{country.population}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  export default CountryDescription;