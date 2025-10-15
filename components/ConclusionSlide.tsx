import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import archaicLogo from 'figma:asset/efc588e965212cf13b630e23acfc5fe74e741c7c.png';

export function ConclusionSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-15 blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-16 py-12">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img src={archaicLogo} alt="archaic" className="h-16" />
        </div>

        {/* Main Message */}
        <div className="text-center mb-12">
          <div className="w-20 h-1 mx-auto mb-6" style={{
            background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
          }}></div>
          <h2 className="text-5xl mb-6 gradient-text">
            お問い合わせはこちら
          </h2>
          <p className="text-lg text-gray-600">
            サービスの詳細や導入のご相談は、お気軽にお問い合わせください
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-5 max-w-3xl w-full">
          <div className="border-2 border-gray-200 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <Globe className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-2">Website</p>
                <p className="text-gray-900 text-base mb-1">http://archaic.co.jp</p>
                <p className="text-[#1e3a8a] text-base">https://archaic.co.jp/koukokuai/</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <Phone className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-2">Phone</p>
                <p className="text-gray-900 text-2xl">03-5860-6788</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <Mail className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-2">Email</p>
                <p className="text-gray-900 text-base">info@archaic.co.jp</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center flex-shrink-0 rounded-lg">
                <MapPin className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-2">Address</p>
                <p className="text-gray-900 text-base">東京都渋谷区神宮前1-22-1</p>
                <p className="text-gray-900 text-base">オークラビル5F</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">© 2025 Archaic Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
