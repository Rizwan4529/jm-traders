import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { mailtoLink, whatsappLink } from "../../constants/contact";
import type { Content } from "../../content/content";
import { useContent } from "../../i18n/useContent";
import Button from "../ui/Button";
import FormField from "../ui/FormField";

type Interest = keyof Content["contact"]["form"]["interests"];
type Channel = "whatsapp" | "email";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: Interest;
  quantity: string;
  message: string;
};

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const INTERESTS: Interest[] = [
  "jellyCups",
  "jellyDrinks",
  "pizzaBoxes",
  "menuBoxes",
  "other",
];

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "jellyCups",
  quantity: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** No backend: the request is composed here and handed to WhatsApp or the mail app. */
const ContactForm = () => {
  const { t } = useContent();
  const form = t.contact.form;
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const update =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const validate = (): FormErrors => ({
    ...(values.name.trim() ? {} : { name: form.errors.name }),
    ...(values.message.trim() ? {} : { message: form.errors.message }),
    ...(values.email.trim() && !EMAIL_PATTERN.test(values.email.trim())
      ? { email: form.errors.email }
      : {}),
  });

  const composeMessage = () => {
    const details: [string, string][] = [
      [form.fields.name, values.name],
      [form.fields.company, values.company],
      [form.fields.email, values.email],
      [form.fields.phone, values.phone],
      [form.fields.interest, form.interests[values.interest]],
      [form.fields.quantity, values.quantity],
    ];
    return [
      form.greeting,
      "",
      values.message.trim(),
      "",
      ...details
        .filter(([, value]) => value.trim())
        .map(([label, value]) => `${label}: ${value.trim()}`),
    ].join("\n");
  };

  const send = (channel: Channel) => {
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const text = composeMessage();
    if (channel === "whatsapp") {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailtoLink(form.emailSubject, text);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send("whatsapp");
  };

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label={form.fields.name} error={errors.name}>
          {(props) => (
            <input
              {...props}
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={update("name")}
            />
          )}
        </FormField>
        <FormField label={form.fields.company} optionalLabel={form.optional}>
          {(props) => (
            <input
              {...props}
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={update("company")}
            />
          )}
        </FormField>
        <FormField
          label={form.fields.email}
          optionalLabel={form.optional}
          error={errors.email}
        >
          {(props) => (
            <input
              {...props}
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={update("email")}
            />
          )}
        </FormField>
        <FormField label={form.fields.phone} optionalLabel={form.optional}>
          {(props) => (
            <input
              {...props}
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={update("phone")}
            />
          )}
        </FormField>
        <FormField label={form.fields.interest}>
          {(props) => (
            <select {...props} value={values.interest} onChange={update("interest")}>
              {INTERESTS.map((interest) => (
                <option key={interest} value={interest}>
                  {form.interests[interest]}
                </option>
              ))}
            </select>
          )}
        </FormField>
        <FormField label={form.fields.quantity} optionalLabel={form.optional}>
          {(props) => (
            <input
              {...props}
              type="text"
              placeholder={form.placeholders.quantity}
              value={values.quantity}
              onChange={update("quantity")}
            />
          )}
        </FormField>
      </div>

      <FormField label={form.fields.message} error={errors.message}>
        {(props) => (
          <textarea
            {...props}
            rows={5}
            required
            placeholder={form.placeholders.message}
            value={values.message}
            onChange={update("message")}
          />
        )}
      </FormField>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button type="submit" variant="accent" size="lg">
          <FaWhatsapp aria-hidden="true" className="size-4" />
          {form.sendWhatsApp}
        </Button>
        <Button variant="outline" size="lg" onClick={() => send("email")}>
          <FaEnvelope aria-hidden="true" className="size-4" />
          {form.sendEmail}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
