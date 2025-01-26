import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, message } = formData;
    
        if (!firstName || !lastName || !email || !phone || !message) {
          alert("Please fill out all fields.");
          return;
        }
    
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      };
  return (
    <div className=" mx-auto shadow-xl rounded-xl w-4/5 flex gap-10 px-8 py-16 bg-white mb-[10%]">
          <div className="flex-1 ">
            <h3 className="text-3xl font-bold text-gray-600 mb-4">
              Get in <span className="text-secondary">touch</span>, ask a <span className="text-secondary"> question</span>!
            </h3>
            <p className="text-3xl font-bold mb-4">The pleasure is all ours!</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  aria-label="First Name"
                  className="p-4 border-gray text-secondary rounded-lg"
                />
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  aria-label="Last Name"
                  className="p-4 border border-gray text-gray rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="p-4 border border-gray text-gray rounded-lg"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  className="p-4 border border-gray text-gray rounded-lg"
                />
              </div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                aria-label="Your Message"
                className="p-4 border border-gray text-gray rounded-lg"
              />
              <Button type="submit" className="bg-secondary text-white px-10 py-6 rounded-lg flex items-center gap-2">
                Send <ArrowRight />
              </Button>
            </form>
          </div>
          <div className="flex-1 ">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091544!2d-122.41941508468128!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c69b7b497%3A0xc6a8a88ef1e7f9f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1672520627280!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
  )
}

export default ContactForm
