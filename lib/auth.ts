import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import { emailOTP } from "better-auth/plugins";
import resend from "./resend";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        await resend.emails.send({
          from: "Zudroicdev <onboarding@resend.dev>",
          to: [email],
          subject: "Zudroicdev - Email Verification",
          html: `<p>Your otp is <strong>${otp}</strong></p>`,
        });
      },
    }),
  ],
});
