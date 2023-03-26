import React, { useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi";

//user-defined data for country value and sate value
const countries = ["India", "Australia", "South Africa", "England"];
const countryData = {
  India: ["Delhi", "Mumbai", "Jaipur"],
  Australia: ["Sydney", "Melbourne", "Brisbane"],
  SouthAfrica: [" Eastern Cape", "Gauteng", "North West"],
  England: ["Wales", "London", "Johanusburg"],
};

// Main Parent component
const RegistrationForm = () => {
  // creating local states.
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [estate, setEstate] = useState("");
  const [randomString, setRandomString] = useState("");
  const [captcha, setCaptcha] = useState("");

  //creating random captcha;

  function generateRandomString() {
    let lenthOfString = 6;
    let randomString = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < lenthOfString; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setRandomString(randomString);
    return randomString;
  }

  useEffect(() => {
    generateRandomString();
  }, []);

  //handle form submit
  const handleSubmit = () => {
    if (randomString === captcha) {
      alert("You are registered succesfully");
    } else {
      alert("Wrong captcha enterd, please try again");
    }
  };

  // Log Testings
  console.log(firstName, "firstName");

  return (
    <div>
      <div className="form-registration">
        <form onSubmit={handleSubmit}>
          <h1>Create a new account</h1>
          <hr></hr>

          <div className="input-div">
            <label>First Name: </label>

            <div className="formDetails-base-value">
              <input
                autoComplete="off"
                type={"text"}
                name="firstName"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                required
              />
              <span className="form-error"></span>
            </div>
          </div>
          {/* Last Name */}
          <div className="input-div">
            <label>Last Name: </label>
            <div className="formDetails-base-value">
              <input
                autoComplete="off"
                type={"text"}
                name="lastName"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                required
              />
              <span className="form-error"></span>
            </div>
          </div>
          {/* DOB */}
          <div className="input-div">
            <label className="formDetails-base-row">Date of Birth: </label>
            <div className="formDetails-base-value">
              <input
                required
                type={"date"}
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setdateOfBirth(e.target.value)}
              />{" "}
              <span className="form-error"></span>
            </div>
          </div>
          {/* Country */}
          <div className="input-div">
            <label>Country: </label>
            <div className="formDetails-base-value">
              <select
                required
                className="form-list"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value={""}>Select your Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <span className="form-error"></span>
            </div>
          </div>

          <div className="input-div">
            <label>State: </label>
            {
              // country !== undefined && country !== "" && country !== "none"
              country !== undefined && country !== "" ? (
                <div className="formDetails-base-value">
                  <select
                    required
                    className="form-list"
                    name="state"
                    value={estate}
                    onChange={(e) => setEstate(e.target.value)}
                  >
                    <option value={""}>Select your state</option>

                    {country === "India"
                      ? countryData.India.map((state) => (
                          <option key={state}>{state}</option>
                        ))
                      : country === "Australia"
                      ? countryData.Australia.map((state) => (
                          <option>{state}</option>
                        ))
                      : country === "South Africa"
                      ? countryData.SouthAfrica.map((state) => (
                          <option>{state}</option>
                        ))
                      : country === "England"
                      ? countryData.England.map((state) => (
                          <option>{state}</option>
                        ))
                      : ""}
                  </select>
                  <span className="form-error"></span>{" "}
                </div>
              ) : (
                ""
              )
            }
          </div>
          {/* captcha */}
          <div className="input-div">
            <label>
              <spann
                style={{
                  borderRadius: "2px",
                  padding: "4px",
                  backgroundColor: "cadetBlue",
                }}
              >
                {randomString}
              </spann>{" "}
              <TfiReload
                cursor={"pointer"}
                onClick={() => generateRandomString()}
              />
            </label>
          </div>
          <div className="input-div">
            <input
              placeholder="Enter the captcha"
              autoComplete="off"
              type={"text"}
              name="lastName"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
            />
            <span className="form-error"></span>
          </div>

          <button
            onClick={() => console.log("submit clicked")}
            className="form-button"
            type="submit"
            // disabled={randomString === captcha ? false : true}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

// /////////////////////////////////////////
