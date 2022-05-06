import { Camera } from "phosphor-react";
import { html2canvas } from 'html2canvas';

export function ScreenshotButton() {
    function handleTakeScreenshot () {
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDaraURL('image/png')
        
    }

  return (
    <button
      type="button"
      onClick="handleTakeScreenshot"
      className="p-2 bg-zinc-800 rounded med border-transparent hover:bg-zinc-700 transition colors focus outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      <Camera className="w-6 h-6" />
    </button>
  );
}
