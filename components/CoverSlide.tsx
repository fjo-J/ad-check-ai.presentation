import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8">
        <img src={archaicLogo} alt="archaic" className="h-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-16 py-12">
        <div className="text-center">
          {/* Title */}
          <h1 className="text-6xl mb-6 leading-tight gradient-text">
            広告チェックAI
          </h1>
          
          <div className="w-32 h-1 mx-auto mb-8" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          
          <h2 className="text-3xl mb-12 gradient-text-blue">
            サービス説明資料
          </h2>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white border-2 border-[#1e3a8a] p-6 rounded-lg shadow-lg">
              <div className="mb-3">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="check-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#1e3a8a' }} />
                      <stop offset="50%" style={{ stopColor: '#3b82f6' }} />
                      <stop offset="100%" style={{ stopColor: '#fbbf24' }} />
                    </linearGradient>
                  </defs>
                  <path stroke="url(#check-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-900 mb-2">初期費用</p>
              <p className="text-3xl gradient-text">0円</p>
            </div>

            <div className="bg-white border-2 border-[#1e3a8a] p-6 rounded-lg shadow-lg">
              <div className="mb-3">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#1e3a8a' }} />
                      <stop offset="50%" style={{ stopColor: '#3b82f6' }} />
                      <stop offset="100%" style={{ stopColor: '#fbbf24' }} />
                    </linearGradient>
                  </defs>
                  <path stroke="url(#lightning-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-gray-900 mb-2">チェック工数</p>
              <p className="text-3xl gradient-text">9割削減</p>
            </div>

            <div className="bg-white border-2 border-[#1e3a8a] p-6 rounded-lg shadow-lg">
              <div className="mb-3">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="settings-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#1e3a8a' }} />
                      <stop offset="50%" style={{ stopColor: '#3b82f6' }} />
                      <stop offset="100%" style={{ stopColor: '#fbbf24' }} />
                    </linearGradient>
                  </defs>
                  <path stroke="url(#settings-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <p className="text-gray-900 mb-2">お客様のご要望に応じた</p>
              <p className="text-xl gradient-text">カスタマイズ開発が対応可能</p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8">
            AIを搭載した広告表現チェックツールに<br />
            URL を入力、画像やファイルをアップロードするだけで、<br />
            瞬時に確認し言い換え文章を出力。
          </p>

          {/* Date */}
          <p className="text-gray-500 text-sm">
            株式会社Archaic<br />
            2025年
          </p>
        </div>
      </div>
    </div>
  );
}
