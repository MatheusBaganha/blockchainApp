interface NavbarItemProps {
  children: string;
  classProps?: string;
}

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent, name: string) => void;
}
