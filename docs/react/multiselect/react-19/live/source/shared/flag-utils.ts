export function flagClass(code?: string) {
  return code ? `fi fi-${code.toLowerCase()}` : '';
}
