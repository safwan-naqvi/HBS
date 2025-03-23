"use server";

import { EmailTemplate } from "@/components/common/email-template/email-template";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email") as string;
  const fullname = formData.get("fullname") as string;
  const companyName = formData.get("companyName") as string;
  const service = formData.get("service") as string;
  const range = formData.get("range") as string;
  const description = formData.get("description") as string;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(description, 5000)) {
    return {
      error: "Invalid description",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "HashBitStudio | Leads <leads@hashbitstudio.com>",
      to: ["safwan.naqvi@gmail.com"],
      cc: ["leads@hashbitstudio.com"],
      subject: "New Lead Generated From HashBitStudio Contact",
      replyTo: senderEmail as string,
      react: EmailTemplate({
        fullname,
        companyName,
        senderEmail,
        service,
        range,
        description,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
