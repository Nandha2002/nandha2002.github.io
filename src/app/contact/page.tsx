import { type Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact | Nandha Kumar Reddy Kaipa",
  description: "Get in touch with me for collaboration opportunities, project discussions, or any inquiries.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Contact Me</h1>
          <p className="text-muted-foreground">
            Have a question about my projects, looking for collaboration opportunities, 
            or want to discuss AI/ML solutions? I&apos;d love to hear from you! 
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}