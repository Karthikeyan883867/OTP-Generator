function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 10000);

    let emailbody = `<h2>Your OTP is ${otp_val}</h2>`;
    Email.send({
        SecureToken: "14abbeac-5993-457b-9f23-039de9bd2a88",
        To: email.value,
        From: "mkkarthikeyan926@gmail.com",
        Subject: "Email OTP using Java script",
        Body: emailbody,
    })
    const message = "OK";

    if (message === "OK") {
        alert("OTP sent to your email " + email.value);
        otpverify.style.display = "flex";
    }

    const otp_inp = document.getElementById('otp_inp');
    const otp_btn = document.getElementById('otp-btn');

    otp_btn.addEventListener('click', () => {
        if (otp_inp.value == otp_val) {
            alert("Email address verified...");
        } else {
            alert("Invalid OTP");
        }
    });
}
