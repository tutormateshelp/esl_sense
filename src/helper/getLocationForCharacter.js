export default function getLocationForCharacter(character) {
  let location = "";

  if (character === "Bank Teller") {
    location = "bank";
  } else if (character === "Doctor") {
    location = "hospital";
  } else if (character === "Landlord") {
    location = "apartment";
  } else if (character === "Postman") {
    location = "post office";
  } else if (character === "Firefighter") {
    location = "fire station";
  } else if (character === "Manager") {
    location = "workplace";
  } else location = "characterInvalid";

  return location;
}
