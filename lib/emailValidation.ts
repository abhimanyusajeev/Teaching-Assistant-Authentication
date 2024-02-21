export function validateEmail(email: string): boolean {
  // Basic email validation logic
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
