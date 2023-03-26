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

// Function to handle change of each events from the user
// const handleInputChange = (e) => {
//   const { name, value } = e;
//   setData((prevProps) => ({ ...prevProps, [name]: value }));
// };

// Function to handle the inputs from the user
// const submitHandler = (details) => {
//   console.log("submitHandler", details);

//   return details;
// };

/// displaying input by user

// {
//   /* <div>
//         <h4>Data Entered: </h4>
//         <h4>Image: {value !== "" && profile} </h4>
//         <h4>DOB: {value !== "" && value.dateOfBirth} </h4>
//         <h4>Name: {value !== "" && value.name} </h4>
//         <h4>Country: {value !== "" && value.country} </h4>
//         <h4>State: {value !== "" && value.state} </h4>
//         <h4>Media: {value !== "" && media}</h4>
//       </div> */
// }

// country validation

// {country !== undefined && country !== "" && country !== "none" ?

//media input siaplay

// {
//   /* <div className="input-div">
//             <label>Media: </label>
//             <div className="formDetails-base-value">
//               <input
//                 value={media}
//                 type={"file"}
//                 name="media"
//                 {...register("media1", {
//                   required: "Please select a file to continue",
//                   onChange: (e) => setMedia(e.target.value),
//                 })}
//               />
//               <span className="form-error">
//                 {errors?.media1 && errors.media1.message}
//               </span>
//             </div>
//           </div> */
// }

//// state representaition

{
  /* <div>
<h3>Data Entered</h3>
{userData &&
  userData !== "" &&
  userData.map((data) => (
    <div key={data.name}>
      {" "}
      <li>
        Profile:{" "}
        {data.profilePicture.length > 0 && data.profilePicture[0].name}
      </li>
      <li>First Name: {data.firstName}</li>
      <li>Last Name: {data.lastName}</li>
      <li>Date of Birth: {data.dateOfBirth}</li>
      <li>Country: {data.country}</li>
      <li>State: {data.state}</li>
      <li>Media 1: {data.media1}</li>
      <li>Media 2: {data.media2}</li>
      <li>Media 3: {data.media3}</li>
    </div>
  ))}
</div> */
  //
  // creating default Data
  //  const [data, setData] = useState({
  //   profile: "",
  //   firstName: "",
  //   DOB: "",
  //   country: "",
  //   State: "",
  // });
}
