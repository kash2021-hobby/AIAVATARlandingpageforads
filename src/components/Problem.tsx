import { Play } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-bold mb-6">
            THE CHALLENGE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Creating Content is{' '}
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Hard & Expensive
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Traditional content creation comes with countless obstacles that prevent brands from
            scaling their marketing efforts effectively.
          </p>
        </div>

        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 rounded-3xl p-8 border-2 border-red-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Camera Shy & Lack of Confidence?
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Don't feel comfortable in front of the camera? You're not alone. Many professionals struggle with on-camera presence and public speaking.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With AI Avatars, you never have to worry about being camera shy again. Create professional content without ever stepping in front of a camera.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-red-100 via-orange-100 to-red-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-2xl">
                        <Play size={36} className="text-white ml-1" />
                      </div>
                      <p className="text-gray-700 font-bold text-lg">AI Avatar Demo Video</p>
                      <p className="text-gray-500 text-sm mt-2">Video will be added here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-2xl">
                        <Play size={36} className="text-white ml-1" />
                      </div>
                      <p className="text-gray-700 font-bold text-lg">AI Avatar Demo Video</p>
                      <p className="text-gray-500 text-sm mt-2">Video will be added here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 rounded-3xl p-8 border-2 border-amber-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  No Time for Shoots & No Studio Space?
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Busy schedule with no time for filming and endless retakes? Don't have access to a professional shooting location?
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With AI Avatars, create professional videos anytime, anywhere. No studios, no scheduling conflicts, no location hassles. Just instant, high-quality content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-8 border-2 border-purple-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Tight Budget & Expensive Equipment?
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Professional video production costs and expensive cameras are breaking your budget, making quality content creation feel impossible.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With AI Avatars, get professional-quality videos at a fraction of the cost. No expensive equipment, no production crew, just affordable, high-quality content creation.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-2xl">
                        <Play size={36} className="text-white ml-1" />
                      </div>
                      <p className="text-gray-700 font-bold text-lg">AI Avatar Demo Video</p>
                      <p className="text-gray-500 text-sm mt-2">Video will be added here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 rounded-3xl p-8 sm:p-12 border-2 border-red-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sound Familiar?
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              These challenges prevent countless businesses from creating the content they need to grow.
              But what if there was a better way?
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
