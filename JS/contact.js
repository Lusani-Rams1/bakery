(() => {

    // DOM ELEMENTS//
    const form = document.getElementById("contactForm");

    if (!form) return;

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const characterCount =
        document.getElementById("characterCount");

    const formStatus =
        document.getElementById("formStatus");

    const fields = [
        fullName,
        email,
        phone,
        subject,
        message
    ];

    // CHARACTER COUNTER// 
    function updateCharacterCount() {

        characterCount.textContent =
            `${message.value.length} / 1000`;

    }

    message.addEventListener(
        "input",
        updateCharacterCount
    );

    // DISPLAY FIELD ERROR//
    function showError(field, errorMessage) {

        const errorElement =
            document.getElementById(`${field.id}Error`);

        field.classList.add("invalid");

        field.setAttribute("aria-invalid", "true");

        field.setAttribute(
            "aria-describedby",
            `${field.id}Error`
        );

        errorElement.textContent = errorMessage;

    }

    // CLEAR FIELD ERROR//
    function clearError(field) {

        const errorElement =
            document.getElementById(`${field.id}Error`);

        field.classList.remove("invalid");

        field.removeAttribute("aria-invalid");

        field.removeAttribute("aria-describedby");

        errorElement.textContent = "";

    }

    // EMAIL VALIDATION//
    function isValidEmail(value) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    }

    // PHONE VALIDATION// 
    function isValidPhone(value) {

        if (!value) return true;

        const cleaned = value.replace(/[\s()-]/g, "");

        return /^\+?\d{7,15}$/.test(cleaned);

    }

    // VALIDATE INDIVIDUAL FIELD//
    function validateField(field) {

        const value = field.value.trim();

        clearError(field);

        switch (field.id) {

            case "fullName":

                if (value.length < 2) {

                    showError(
                        field,
                        "Please enter your full name."
                    );

                    return false;

                }

                break;

            case "email":

                if (!isValidEmail(value)) {

                    showError(
                        field,
                        "Please enter a valid email address."
                    );

                    return false;

                }

                break;

            case "phone":

                if (!isValidPhone(value)) {

                    showError(
                        field,
                        "Please enter a valid phone number."
                    );

                    return false;

                }

                break;

            case "subject":

                if (!value) {

                    showError(
                        field,
                        "Please select an enquiry type."
                    );

                    return false;

                }

                break;

            case "message":

                if (value.length < 10) {

                    showError(
                        field,
                        "Your message must contain at least 10 characters."
                    );

                    return false;

                }

                if (value.length > 1000) {

                    showError(
                        field,
                        "Your message cannot exceed 1000 characters."
                    );

                    return false;

                }

                break;

        }

        return true;

    }

    // LIVE FIELD VALIDATION//
    fields.forEach(field => {

        field.addEventListener("blur", () => {

            validateField(field);

        });

        field.addEventListener("input", () => {

            formStatus.hidden = true;

            if (field.classList.contains("invalid")) {

                validateField(field);

            }

        });

    });

    // VALIDATE ENTIRE FORM//
    function validateForm() {

        let firstInvalidField = null;

        fields.forEach(field => {

            if (!validateField(field)) {

                if (!firstInvalidField) {

                    firstInvalidField = field;

                }

            }

        });

        if (firstInvalidField) {

            firstInvalidField.focus();

            return false;

        }

        return true;

    }

    // FORM STATUS MESSAGE// 
    function showStatus(type, text) {

        formStatus.className = `form-status ${type}`;

        formStatus.textContent = text;

        formStatus.hidden = false;

    }

    // PREPARE ENQUIRY DATA// 
    function getEnquiryData() {

        return {

            fullName: fullName.value.trim(),

            email: email.value.trim(),

            phone: phone.value.trim() || null,

            subject: subject.value.trim(),

            message: message.value.trim()

        };

    }

    // FORM SUBMISSION// 
    form.addEventListener("submit", event => {

        event.preventDefault();

        formStatus.hidden = true;

        if (!validateForm()) {

            showStatus(
                "error",
                "Please correct the highlighted fields."
            );

            return;

        }

        const enquiryData = getEnquiryData();

        // Backend integration will be added here.
        // enquiryData will be sent to POST /api/enquiries.

        showStatus(
            "info",
            "Your details are valid. This form is currently in preview mode and no message has been sent."
        );

    });

    // INITIALISE//
    updateCharacterCount();

})();
