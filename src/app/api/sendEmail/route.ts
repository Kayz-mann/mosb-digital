import { emailSender } from '@/app/helper/emailSender';
import { NextResponse } from "next/server"

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    instagram?: string;
    linkedIn?: string;
    attachments?: any[]; // Add attachments property
}

export default async function sendEmail(req: Request, res: NextResponse ) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, location, website, instagram, linkedIn }: any = req.json();

        // Compose the email body
        const emailBody = `
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Phone: ${phone}
            Location: ${location}
            Website: ${website || 'Not provided'}
            Instagram: ${instagram || 'Not provided'}
            LinkedIn: ${linkedIn || 'Not provided'}
        `;

        try {
            // Call the emailSender function to send the email
           const res =  await emailSender({
                from: email,
                subject: 'Job Application',
                email: 'kayodefredrickbalogun@gmail.com',
                textBody: emailBody,
                // attachments,
            });
            
            return NextResponse.json({ success: res }, { status: 200 });
        } catch (error: any) {
            console.error('Error sending email:', error);
            return NextResponse.json({ error: error }, { status: 400 });
        }
    } else {
        // If the request method is not POST, return a 405 Method Not Allowed error
        // res.setHeader('Allow', ['POST']); // Allow only POST requests
        // res.status(405).json({ message: `Method ${req.method} not allowed` });
        return NextResponse.json({ message: `Method ${req.method} not allowed` }, { status: 405 });
    }
}
