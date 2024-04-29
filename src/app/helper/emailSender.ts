import nodemailer from 'nodemailer';

interface EmailProps {
    from: string;
    subject: string;
    email: string;
    textBody: string;
    // attachments: {
    //     data: string;
    //     path?: string;
    //     contentType?: string; // Changed from type to contentType
    //     filename?: string; // Changed from name to filename
    // }[];
}

export const emailSender = async ({ from, subject, email, textBody, attachments }: EmailProps) => {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.jeramiah.amjad@foodfarms.net',
        port: 465, // Port for SSL
        secure: false, // Use SSL
        auth: {
            user: 'mosb-digital',
            pass: 'password',
        },
    });

    try {
        // Send mail with defined transport object
        const info = await transporter.sendMail({
            from, // sender address
            to: 'jeramiah.amjad@foodfarms.net', // list of receivers
            subject, // Subject line
            text: textBody, // Plain text body
            // attachments: attachments.map(attachment => ({
            //     filename: attachment.filename || 'attachment', // Filename of the attachment
            //     content: attachment.data, // Content of the attachment
            //     contentType: attachment.contentType || 'application/octet-stream', // Content type of the attachment
            // })),
        });

        console.log('Message sent: %s', info.messageId);
    } catch (err) {
        console.error('Error sending email:', err);
    }
};
