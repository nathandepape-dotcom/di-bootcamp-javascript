// 🌟 Exercise 6 : Fortune teller
(function (numberOfChildren, partnerName, location, jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;

    const paragraph = document.createElement("p");
    paragraph.textContent = sentence;
    document.body.appendChild(paragraph);
})(2, "Sarah", "Tel Aviv", "software engineer");
