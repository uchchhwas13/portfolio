import { contactInfo } from './contactInfo';

export const ContactInfoList = () => {
  return (
    <div className="space-y-6 justify-center">
      {contactInfo.map(({ label, value, href, Icon }) => (
        <div className="flex items-start space-x-4" key={label}>
          <div className="p-3 rounded-full bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">{label}</h4>
            <a
              href={href}
              className="hover:text-primary transition-colors"
              target={label === 'Location' ? '_blank' : undefined}
              rel={label === 'Location' ? 'noopener noreferrer' : undefined}
            >
              {value}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
