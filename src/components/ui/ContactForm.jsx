import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { emailjsConfig } from '@/config/emailjs';
import FadeIn from './FadeIn';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone || 'Not provided',
          company: data.company || 'Not provided',
          service: data.service,
          message: data.message,
        },
        emailjsConfig.publicKey
      );

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setSubmitError(
        'Something went wrong. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    'w-full px-4 py-3 bg-white border border-border-light rounded-xl font-body text-[15px] text-text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary-bright/20 focus:border-primary-bright transition-all duration-200';
  const errorStyles = 'font-body text-sm text-error mt-1.5';
  const labelStyles =
    'block font-body text-sm font-semibold text-text-primary mb-2';

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-border-light rounded-2xl p-8 md:p-10"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="fullName" className={labelStyles}>
              Full Name <span className="text-error">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className={`${inputStyles} ${errors.fullName ? 'border-error focus:ring-error/20' : ''}`}
              {...register('fullName', {
                required: 'Full name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' },
              })}
            />
            {errors.fullName && (
              <p className={errorStyles}>{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelStyles}>
              Email Address <span className="text-error">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@company.com"
              className={`${inputStyles} ${errors.email ? 'border-error focus:ring-error/20' : ''}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <p className={errorStyles}>{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="phone" className={labelStyles}>
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (505) 555-0199"
              className={`${inputStyles} ${errors.phone ? 'border-error focus:ring-error/20' : ''}`}
              {...register('phone', {
                pattern: {
                  value: /^[+]?[\d\s\-()]{10,18}$/,
                  message: 'Please enter a valid phone number',
                },
              })}
            />
            {errors.phone && (
              <p className={errorStyles}>{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className={labelStyles}>
              Company Name
            </label>
            <input
              id="company"
              type="text"
              placeholder="Your Company"
              className={inputStyles}
              {...register('company')}
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="service" className={labelStyles}>
            Service Needed <span className="text-error">*</span>
          </label>
          <select
            id="service"
            className={`${inputStyles} ${errors.service ? 'border-error focus:ring-error/20' : ''}`}
            {...register('service', { required: 'Please select a service' })}
          >
            <option value="">Select a service</option>
            <option value="Temporary Staffing">Temporary Staffing</option>
            <option value="Permanent Recruitment">Permanent Recruitment</option>
            <option value="Contract Staffing">Contract Staffing</option>
            <option value="Executive Search">Executive Search</option>
            <option value="Payroll Services">Payroll Services</option>
            <option value="RPO Solutions">RPO Solutions</option>
            <option value="Other">Other</option>
          </select>
          {errors.service && (
            <p className={errorStyles}>{errors.service.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className={labelStyles}>
            Message <span className="text-error">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your staffing needs..."
            className={`${inputStyles} resize-none ${errors.message ? 'border-error focus:ring-error/20' : ''}`}
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' },
            })}
          />
          {errors.message && (
            <p className={errorStyles}>{errors.message.message}</p>
          )}
        </div>

        {submitError && (
          <div className="mb-4 p-3 bg-error/10 border border-error/20 rounded-lg">
            <p className="font-body text-sm text-error">{submitError}</p>
          </div>
        )}

        {isSuccess && (
          <div className="mb-4 p-3 bg-success/10 border border-success/20 rounded-lg flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
            <p className="font-body text-sm text-success font-medium">
              Thank you! We will get back to you within 24 hours.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary-bright text-white font-body font-semibold text-[15px] px-7 py-3.5 rounded-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-bright/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </FadeIn>
  );
}
