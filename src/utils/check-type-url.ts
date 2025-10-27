export function getFileType(
  url: string,
): 'image' | 'video' | 'audio' | 'unknown' {
  const lowerUrl = url.toLowerCase();

  if (
    /\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?|$)/.test(lowerUrl) ||
    lowerUrl.includes('fm=jpg') ||
    lowerUrl.includes('fm=png')
  ) {
    return 'image';
  }

  if (/\.(mp4|webm|ogg|mov|mkv)(\?|$)/.test(lowerUrl)) {
    return 'video';
  }

  if (/\.(mp3|wav|ogg|m4a)(\?|$)/.test(lowerUrl)) {
    return 'audio';
  }

  return 'unknown';
}
