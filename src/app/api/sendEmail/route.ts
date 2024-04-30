import nodemailer from 'nodemailer';
import { emailSender } from '@/app/helper/emailSender';
import { NextResponse } from "next/server";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    instagram?: string;
    linkedIn?: string;
    letter?: any
    cv?: any
    attachments?: any[]; // Add attachments property
}


const transporter = nodemailer.createTransport({
    host: 'live.smtp.mailtrap.io',
    port: 587, // Port for SSL
    secure: false, // Use SSL
    auth: {
        user: 'api',
        pass: 'f06c36f0fb6f2c3b4ed69ecc75613fac',
    },

});

export async function POST(req: Request, res: NextResponse ) {
    if (req.method === 'POST') {
        const formData = await req.json();
        console.log("Received data:", formData);
        
        const { firstName, lastName, email, phone, location, website, instagram, linkedIn }: any =  await req.json();

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
            // await transporter.verify()

            const sendResult = await transporter.sendMail({
                from: email,
                subject: 'Job Application',
                to: 'kayodefredrickbalogun@gmail.com',
                html: emailBody,
            })

            console.log('sent',sendResult)
    
            
            return NextResponse.json({ success: res }, { status: 200 });
        } catch (error: any) {
            console.log('Request method', req.method);
            console.error('Error sending email:', error);
            return NextResponse.json({ error: error }, { status: 400 });
        }
    } else if (req.method === 'OPTIONS') {
        // If the request method is OPTIONS, return a 200 OK response
        console.log('Request method', req.method);
        return NextResponse.json({ message: `Method ${req.method} allowed` }, { status: 200 });
    } else {
        console.log('Request method', req.method);
        // If the request method is not POST or OPTIONS, return a 405 Method Not Allowed error
        return NextResponse.json({ message: `Method ${req.method} not allowed` }, { status: 405 });
    }
}
