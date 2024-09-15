// const form = document.getElementById("resumeForm") as HTMLFormElement;
// const resumeDiv = document.getElementById("resume") as HTMLDivElement;


// const nameInput = document.getElementById("name") as HTMLInputElement;
// const emailInput = document.getElementById("email") as HTMLInputElement;
// const phoneInput = document.getElementById("phone") as HTMLInputElement;
// const educationInput = document.getElementById("education") as HTMLTextAreaElement;
// const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
// const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;


// const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
// const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
// const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
// const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
// const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;
// const resumeExperience = document.getElementById("resumeExperience") as HTMLParagraphElement;


// form.addEventListener("submit", (event) => {
//   event.preventDefault(); 

  
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const phone = phoneInput.value;
//   const education = educationInput.value;
//   const skills = skillsInput.value;
//   const experience = experienceInput.value;

  
//   resumeName.textContent = name;
//   resumeEmail.textContent = email;
//   resumePhone.textContent = phone;
//   resumeEducation.textContent = education;
//   resumeSkills.textContent = skills;
//   resumeExperience.textContent = experience;

  
//   resumeDiv.classList.remove("hidden");
// });

// const saveButton = document.getElementById("saveButton") as HTMLButtonElement;

// saveButton.addEventListener("click", () => {
//   const updatedName = document.getElementById("resumeName")?.textContent;
//   const updatedEmail = document.getElementById("resumeEmail")?.textContent;
//   const updatedPhone = document.getElementById("resumePhone")?.textContent;
//   const updatedEducation = document.getElementById("resumeEducation")?.textContent;
//   const updatedSkills = document.getElementById("resumeSkills")?.textContent;
//   const updatedExperience = document.getElementById("resumeExperience")?.textContent;

//   // Store or process the updated data (example: saving to localStorage)
//   localStorage.setItem("resumeData", JSON.stringify({
//     name: updatedName,
//     email: updatedEmail,
//     phone: updatedPhone,
//     education: updatedEducation,
//     skills: updatedSkills,
//     experience: updatedExperience
//   }));

//   alert("Resume changes saved!");
// });
