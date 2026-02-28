export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};
