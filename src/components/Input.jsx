export function Input({ type, placeholder, onChange, name, required }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      required={required}
    />
  );
}
