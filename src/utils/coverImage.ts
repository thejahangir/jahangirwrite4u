const localCovers = import.meta.glob('../assets/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export function resolveCoverImage(coverImage?: string): string | undefined {
  if (!coverImage) return undefined;
  if (/^(https?:)?\/\//.test(coverImage) || coverImage.startsWith('/')) {
    return coverImage;
  }

  const match = Object.entries(localCovers).find(([path]) =>
    path.endsWith(`/${coverImage}`)
  );

  return match?.[1] ?? coverImage;
}
