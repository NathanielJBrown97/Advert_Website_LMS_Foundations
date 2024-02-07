// constant object of influencial person. Manually set age, and qualities.
const influence = {
    name: "Some Really Real Person",
    age: 67,
    qualities: ["Authentic", "Actual", "Genuine"]
  };
  
  // Display person's information
  console.log(influence.name);
  console.log("Age: " + influence.age);
  console.log("Qualities:");
  influence.qualities.forEach(quality => console.log(quality));
  
  // function to create partner object with a name, birthYear, and hobbies.
  // set each of these member values to the respective parameter.
  function Partner(name, birthYear, hobbies) {
    this.name = name;
    this.birthYear = birthYear;
    this.hobbies = hobbies;
  }
  
  // declare a partner to a new 'Partner' obejct with (name, birth, hobbies)
  const partner = new Partner("Nathaniel Brown", 1997, ["Reading", "Gardening", "Cooking"]);
  
  // take partner object, declare current year using Date(). Return the Current year - birth year. Result = Age
  function calculateAge(partnerObj) {
    const currentYear = new Date().getFullYear();
    return currentYear - partnerObj.birthYear;
  }
  
  // display info from the console log of the name variable of partner object, then the age + result of calculatage function, and hobbies.
  function display(partnerObj) {
    console.log(partnerObj.name);
    console.log("Age: " + calculateAge(partnerObj));
    console.log("Hobbies:");
    partnerObj.hobbies.forEach(hobby => console.log(hobby));
  }
  
  // display info
  display(partner);
  