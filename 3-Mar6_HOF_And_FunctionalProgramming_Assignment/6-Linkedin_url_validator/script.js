

const linkedinUrlValidator = (input) => {
  let exp = /^(https:\/\/www.linkedin.com\/in\/)[a-zA-Z0-9-_]{5,30}\/?$/;
  let flags = 'g';
  let regex = new RegExp(exp, flags);
  if (regex.test(input)) {
    console.log("Valid Linkedin Profile Url");
  } else {
    console.log("Invalid Linkedin Profile Url");
  }
}

const url = "https://www.linkedin.com/in/harsh-singhlay-12b391216/"
linkedinUrlValidator(url);