import { transport } from "@/lib/nodemailer";
import { NextResponse } from "next/server";
import Handlebars from "handlebars";
import path from "path";
import fs from "fs/promises";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  instagram?: string;
  linkedIn?: string;
  cv: File;
  letter: File;
  jobTitle?: string;
}

const emailGenerator = (data: FormData) => {
  const source = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Job Application</title>
      <style>
          body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
          }
  
          .container {
              max-width: 500px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border: 1px solid #ccc;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              align-items: center;
          }
  
          .header {
              text-align: center;
              margin-bottom: 20px;
          }
  
          .form-content {
              margin-bottom: 20px;
              margin-left: 100px;
           
          }
  
          .form-content p {
              margin-bottom: 10px;
          }
  
          .form-content p strong {
              display: inline-block;
              width: 120px;
              font-weight: bold;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>New Job Application</h1>
          </div>
          <div class="form-content">
              <p><strong>First Name:</strong> ${data.firstName}</p>
              <p><strong>Last Name:</strong> ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Location:</strong> ${data.location}</p>
              <p><strong>Website:</strong> ${data.website}</p>
              <p><strong>Instagram:</strong> ${data.instagram}</p>
              <p><strong>LinkedIn:</strong> ${data.linkedIn}</p>
          </div>
      </div>
  </body>
  </html>

  `
  const template = Handlebars.compile(source);
  return {
    subject: `New Job for ${data.jobTitle} from ${data.email || "Applicant"}`,
    html: template(data),
  };
};

export async function POST(req: Request, res: NextResponse) {
  if (req.method === "POST") {
    const data: FormData = await req.json();
    try {
      const emailContent = emailGenerator(data);


      transport.sendMail({
        from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: emailContent.subject,
        html: emailContent.html,
        attachments: [
          {
            filename: data.cv.name,
            path:  data.cv.name.replace(/ /g, ""),
        }
        ],
    
      });

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error }, { status: 400 });
    }
  } else {
    return NextResponse.json(
      { message: `Method ${req.method} not allowed` },
      { status: 405 }
    );
  }
}







