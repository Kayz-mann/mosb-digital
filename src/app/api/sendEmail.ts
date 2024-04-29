import nodemailer from 'nodemailer';

interface Attachment {
    filename: string;
    content: string;
    contentType: string;
}

interface EmailProps {
    from: string;
    subject: string;
    email: string;
    textBody: string;
    attachments: Attachment[];
}

const emailSender = async ({ from, subject, email, textBody, attachments }: EmailProps) => {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.kayodefredrickbalogun@gmail.com',
        port: 465, // Port for SSL
        secure: true, // Use SSL
        auth: {
            user: 'mosb-digital',
            pass: 'password',
        },
    });

    try {
        // Send mail with defined transport object
        const info = await transporter.sendMail({
            from, // sender address
            to: 'kayodefredrickbalogun@gmail.com', // list of receivers
            subject, // Subject line
            text: textBody, // Plain text body
            attachments: attachments.map(attachment => ({
                filename: attachment.filename,
                content: attachment.content,
                contentType: attachment.contentType,
            })),
        });

        console.log('Message sent: %s', info.messageId);
    } catch (err) {
        console.error('Error sending email:', err);
    }
};

export { emailSender };
