import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_NODEMAILER_HOST,
  port: Number(process.env.NEXT_PUBLIC_NODEMAILER_PORT),
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_USER,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
  },
});
