export function tagsRemover(text: string): string {
  return text.replace(/<\/?[a-z][a-z0-9]*>/gi, "");
}
