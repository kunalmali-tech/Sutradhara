const MEDIA_BASE_URL = (
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL ??
  "https://sutradhara-storage-611723957834-ap-southeast-2-an.s3.ap-southeast-2.amazonaws.com"
).replace(/\/$/, "");

export function mediaUrl(path: string): string {
  return `${MEDIA_BASE_URL}${path}`;
}
