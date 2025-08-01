import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';

export const SocialLinks = () => (
  <div className="pt-8">
    <h4 className="font-medium mb-4">Connect with Me</h4>
    <div className="flex space-x-4 justify-center">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Twitter />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Github />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Facebook />
      </a>
    </div>
  </div>
);
