const loginForm = document.getElementById('logincont');
const registerForm = document.getElementById('signupcont');

const loginRoleSelect = document.getElementById("role");
const signupRoleSelect = document.getElementById("signupRole");

 
function toggleStudentId(formType) {
    let roleSelect, studentIdField;

    if (formType === 'login') {
        roleSelect = document.getElementById("role");
        studentIdField = document.getElementById("loginStudentIdField");
    } else {
        roleSelect = document.getElementById("signupRole");
        studentIdField = document.getElementById("signupStudentIdField");
    }

    if (roleSelect.value === "parent") {
        studentIdField.style.display = "block";
    } else {
        studentIdField.style.display = "none";
    }
}

// Add event listeners for role selection
loginRoleSelect.addEventListener("change", function () {
    toggleStudentId('login');
});

signupRoleSelect.addEventListener("change", function () {
    toggleStudentId('signup');
});

// Toggle between Login and Signup forms
function toggleForms() {
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

// Ensure the correct form is displayed on page load
window.onload = function () {
    // Hide the registration form by default
    registerForm.style.display = "none";

    // Set the initial state of the student ID field based on the selected role
    toggleStudentId('login');
    toggleStudentId('signup');
};
