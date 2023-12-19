export default function DownloadBtn({
  prompt,
  url,
  created,
}: DownloadBtnProps) {
  const onDownload = async (url: string, fileName: string) => {
    const imageBlob = await fetch(url);
  };

  return (
    <div onClick={() => onDownload(url, `${prompt + '_' + created}`)}>저장</div>
  );
}

interface DownloadBtnProps {
  prompt: string;
  url: string;
  created: string;
}
