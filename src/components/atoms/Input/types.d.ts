interface InputFieldPRops {
  id: string;
  type: string;
  value: string;
  placeholder: string;
  dataTestId: strings;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  style?: React.CSSProperties;
}
