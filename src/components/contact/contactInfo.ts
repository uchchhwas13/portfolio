import { Mail, Phone, MapPin } from 'lucide-react';

export type ContactInfoItem = {
  label: string;
  value: string;
  href: string;
  Icon: React.ElementType;
};

export const contactInfo: ContactInfoItem[] = [
  {
    label: 'Email',
    value: 'hello@gmail.com',
    href: 'mailto:hello@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: '01716000000',
    href: 'tel:01716000000',
    Icon: Phone,
  },
  {
    label: 'Location',
    value: 'Shewrapara, Dhaka, Bangladesh',
    href: 'https://maps.google.com/?q=Shewrapara,+Dhaka,+Bangladesh',
    Icon: MapPin,
  },
];
