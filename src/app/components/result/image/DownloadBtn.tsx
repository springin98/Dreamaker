export default function DownloadBtn({ url, created }: DownloadBtnProps) {
  return (
    <a href={url} download={created}>
      저장
    </a>
  );
}

interface DownloadBtnProps {
  url: string;
  created: string;
}
