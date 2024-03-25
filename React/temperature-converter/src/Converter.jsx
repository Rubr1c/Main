function Converter() {
  const form = document.getElementById("converterForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const temp = document.getElementById("tempInput").value;
    const select = document.getElementById("selectTemp").value;
    const output = document.getElementById("output");

    if (select === "Celsius") {
      output.innerHTML = `<h2>${temp}°C is ${Math.round(
        temp * 1.8 + 32,
        2
      )}°F</h2>`;
    } else {
      output.innerHTML = `<h2>${temp}°F is ${Math.round(
        (temp - 32) / 1.8,
        2
      )}°C</h2>`;
    }
  });

  return (
    <div class="converterDiv">
      <h1>Temperature Converter</h1>
      <form className="converterForm" id="converterForm">
        <input
          type="text"
          placeholder="Enter Temperature"
          className="formInput"
          id="tempInput"
        />
        <br />
        <select name="Conversion to" id="selectTemp" className="formInput">
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
        <br />
        <button type="submit" className="formInput">
          Convert
        </button>
      </form>
      <div className="outputDiv" id="output"></div>
    </div>
  );
}

export default Converter;
