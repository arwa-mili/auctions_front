import { useState } from "react";

type urlFileValue = string | null;
type DownloadFn = (url: string) => Promise<boolean>; // Return success

export function useDownload(): [urlFileValue, DownloadFn] {
  const [urlFile, setUrlFile] = useState<urlFileValue>(null);

  const download: DownloadFn = async (url) => {
    const pdfUrl = url.substring(url.lastIndexOf("/") + 1, url.length);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const fileURL = await window.URL.createObjectURL(blob);
      // Setting various property values
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = pdfUrl;
      alink.click();
      return true;
    } catch (error) {
      console.warn("Download failed", error);
      setUrlFile(null);
      return false;
    }
  };

  return [urlFile, download];
}
