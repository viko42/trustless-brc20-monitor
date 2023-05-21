import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const sendWhatsappAlert = async (message: string) => {
    await client.messages
    .create({
        body: message,
        from: 'whatsapp:+14155238886',
        to: process.env.TWILIO_NB as string,
    });
}
