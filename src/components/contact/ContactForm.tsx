import React from 'react';
import { Send } from 'lucide-react';

type ContactFormProps = {
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const ContactForm = ({ isSubmitting, onSubmit }: ContactFormProps) => {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-primary"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-primary"
          placeholder="john@gmail.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          required
          className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-primary resize-none"
          placeholder="Hello, I would like to hear from you"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="cosmic-button w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? 'Sending' : 'Send Message'}
        <Send size={16} />
      </button>
    </form>
  );
};
