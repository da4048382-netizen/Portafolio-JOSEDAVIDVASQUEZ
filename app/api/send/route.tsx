//re_5eGFaBqu_MDUu9NkdsNg2TTV2RW4Pvydo
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = {
  username: string;
  message: string;
  email: string;
};

export async function POST(req: Request) {
  try {
    const dataForm: FormData = await req.json();

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", 
      to: ["da4048382@gmail.com"],
      subject: "Nuevo mensaje desde el portafolio 🚀",
      react: (
        <EmailTemplate
          firstName={dataForm.username}
          message={dataForm.message}
          email={dataForm.email}
        />
      ),
      text: `${dataForm.username} (${dataForm.email}) dice: ${dataForm.message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
