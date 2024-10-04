export type TechInfoProps = {
  name: string;
  description: string;
  link: string;
};

export type FormFieldName = 'name' | 'email' | 'cellphone' | 'subject' | 'message';

type FormField = {
  value: string;
  isValid: boolean;
};

export type FormData = {
  name: FormField;
  email: FormField;
  cellphone: FormField;
  subject: FormField;
  message: FormField;
};
