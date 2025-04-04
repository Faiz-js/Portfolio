"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error)
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      id="contact"
      onSubmit={handleSubmit}
      className="py-4 max-w-full mx-auto p-6 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-lg shadow-md border border-[hsl(var(--border))] my-16"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      <p className="text-left text-lg md:text-xl mb-6">
        I am currently seeking job opportunities. If you think I would be a good
        fit for your role, please let me know.
      </p>
      <div className="flex flex-col md:flex-row gap-0 lg:gap-4">
        <div className="mb-4 w-auto md:w-1/2">
          <label htmlFor="name" className="block font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-[hsl(var(--input))] rounded-md bg-[hsl(var(--background))]"
          />
        </div>
        <div className="mb-4 w-auto md:w-1/2">
          <label htmlFor="email" className="block font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-[hsl(var(--input))] rounded-md bg-[hsl(var(--background))]"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-bold mb-2">
          Message:
        </label>
        <textarea
          rows={4}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-[hsl(var(--input))] rounded-md bg-[hsl(var(--background))]"
        />
      </div>

      {status.message && (
        <div
          className={`mb-4 p-3 rounded ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="flex justify-center items-center">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-3 px-6 w-full md:w-auto rounded-md hover:cursor-pointer hover:scale-110 hover:shadow-lg transition duration-300 disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
