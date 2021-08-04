const mailjet = require('node-mailjet')
    .connect(process.env.MAIL_JET1, process.env.MAIL_JET2);

/**
 * this function send a email
 * @param {object} mail an object contains sender,recipient and message
 * @returns {Boolean}
 */
const mailSender = (mail = {}) => {

    let status = false;

    const request = mailjet
        .post("send", {
            'version': 'v3.1'
        })
        .request({
            "Messages": [{
                "From": {
                    "Email": process.env.MAIL_APP,
                    "Name": "Co'Ride application de covoiturage"
                },
                "To": [{
                    "Email": mail.email,
                    "Name": mail.recipient
                }],
                "Subject": `Co'Ride - ${mail.sender} t'as envoyé un message.`,
                "HTMLPart": `<h3>Salut ${mail.recipient}!</h3>
                            <p>${mail.sender}, utilisateur de Co'Ride vient de t'envoyer le message ci dessous: </p>
                            <p><em>${mail.message}</em></p>
                            <br/>
                            <p>Co'Ride, l'application de covoiturage pour les passionnés!</>`
                            
            }]
        })
    request
        .then((result) => {
            return result.body;
        })
        .catch((err) => {
            throw new Error(err.statusCode)
        })
    
        return request;

}

module.exports = mailSender;