import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { name, contact, message } = req.body;

  if (!name || !contact)
    return res.status(400).json({ error: "Missing required fields" });
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;
  const to = process.env.MAIL_TO;
  // ⬅️ ДОБАВЛЯЕМ ПРОВЕРКУ SMTP_PASS
  if (!user || !pass || !to) {
    console.error(
      "Missing MAIL_USER, SMTP_PASS, or MAIL_TO environment variables."
    );
    return res.status(500).json({ error: "Server configuration error" });
  }
  const transporter: Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user, // ⬅️ Используем гарантированно существующие переменные
      pass: pass, // ⬅️ Используем гарантированно существующие переменные
    },
  });
  try {
    // ⬅️ Отправка через Nodemailer
    await transporter.sendMail({
      from: user, // ⬅️ От кого (ваш Gmail)
      to: to, // ⬅️ Кому (ваш адрес)
      subject: "🛰️ Нова заявка з сайту NebulaCode",
      text: `
Ім’я/Name: ${name}
Контакт/Contact: ${contact}

Повідомлення/Message:
${message}
      `,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("NODEMAILER ERROR:", err); // ⬅️ Логируем ошибку Nodemailer
    res.status(500).json({ error: "Failed to send email" });
  }
}
