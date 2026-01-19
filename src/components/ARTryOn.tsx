import { useEffect, useRef, useState } from 'react';
import { Glasses } from '../types';

interface ARTryOnProps {
  glasses: Glasses;
  onClose: () => void;
}

const ARTryOn = ({ glasses, onClose }: ARTryOnProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      // 清理：停止相機串流
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (!isActive || !videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // 載入眼鏡圖片（優先使用 AR 專用圖片，如果沒有則使用一般圖片）
    const glassesImg = new Image();
    glassesImg.crossOrigin = 'anonymous';
    let glassesLoaded = false;

    glassesImg.onload = () => {
      glassesLoaded = true;
    };
    glassesImg.onerror = () => {
      console.warn('AR 圖片載入失敗，嘗試使用一般圖片');
      glassesLoaded = false;
    };
    
    // 優先使用 AR 專用圖片（透明背景），如果沒有則使用一般圖片
    glassesImg.src = glasses.arImage || glasses.image;

    let animationFrameId: number;

    const draw = () => {
      if (!isActive || !video || !canvas || !ctx) return;

      // 設定畫布尺寸
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;

      // 清除畫布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 簡化的眼鏡位置（實際應該使用臉部追蹤）
      // 這裡使用固定的位置作為示範
      if (glassesLoaded && video.readyState >= 2) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2 - 30; // 稍微上方（眼睛位置）
        const glassesWidth = canvas.width * 0.4;
        const glassesHeight = glassesWidth * 0.3;

        // 確保使用正確的合成模式來處理透明背景
        ctx.globalCompositeOperation = 'source-over';
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
          glassesImg,
          centerX - glassesWidth / 2,
          centerY - glassesHeight / 2,
          glassesWidth,
          glassesHeight
        );
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isActive, glasses.image]);

  const startCamera = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // 請求相機權限
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user', // 前置鏡頭
        },
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setIsActive(true);
        setIsLoading(false);
      }
    } catch (err) {
      console.error('無法啟動相機:', err);
      setError('無法存取相機。請確認已授予相機權限。');
      setIsLoading(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsActive(false);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const handleClose = () => {
    stopCamera();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-4">
        {/* 關閉按鈕 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          ✕
        </button>

        {/* 主要內容區域 */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            AR 虛擬試戴 - {glasses.name}
          </h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {/* 視訊和畫布區域 */}
          <div className="relative bg-black rounded-lg overflow-hidden mb-4" style={{ aspectRatio: '4/3' }}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted
              style={{ transform: 'scaleX(-1)' }} // 鏡像效果
            />
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0 w-full h-full"
              style={{ transform: 'scaleX(-1)' }} // 鏡像效果
            />

            {/* 載入中提示 */}
            {isLoading && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p>正在啟動相機...</p>
                </div>
              </div>
            )}

            {/* 未啟動時的提示 */}
            {!isActive && !isLoading && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-white text-center">
                  <p className="text-lg mb-4">點擊下方按鈕開始 AR 試戴</p>
                  <p className="text-sm text-gray-400">
                    請確保光線充足，並將臉部對準鏡頭
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 控制按鈕 */}
          <div className="flex gap-4 justify-center">
            {!isActive ? (
              <button
                onClick={startCamera}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                開始試戴
              </button>
            ) : (
              <button
                onClick={stopCamera}
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                停止試戴
              </button>
            )}
          </div>

          {/* 使用說明 */}
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>💡 提示：請確保光線充足，並將臉部完整對準鏡頭以獲得最佳效果</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARTryOn;
