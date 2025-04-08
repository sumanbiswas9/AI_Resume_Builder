import { UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

// ===== Icons =====
const LogoIcon = () => (
  <svg viewBox="0 0 512 512" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="#4f46e5">
    <g>
      <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" />
    </g>
  </svg>
);

const Icon = {
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  PaperPlane: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 rotate-[-15deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  Pointer: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400 rotate-[45deg]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
};
// ===== Main Component =====
const Home = () => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLoaded && isSignedIn) {
      navigate('/chat');
    } else {
      navigate('/auth/sign-in');
    }
  };

  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 lg:px-20">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center ">
              <LogoIcon />
            </div>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">CHAT AI<span className="text-blue-600">+</span></span>
          </div>

          {/* Auth */}
          <div className="flex items-center space-x-4">
            <button
              className="bg-slate-200 hover:bg-cyan-400 text-indigo-700 font-semibold py-2 px-4 rounded-lg flex items-center space-x-1 shadow-md transition cursor-pointer"
              onClick={handleClick}
            >
              <span>Try For Free</span>
              <Icon.ExternalLink />
            </button>
            <UserButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="h-2 w-2 bg-green-500 rounded-full" />
              <span className="text-green-600 font-medium text-sm">Highly Demanded on Internet</span>
              <span className="h-2 w-2 bg-green-500 rounded-full" />
            </div>

            <div className="relative border border-dashed border-gray-300 rounded-xl p-8 md:p-12 inline-block mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                AI-Powered Conversations,<br /> Simplified.
              </h1>
              <div className="absolute top-[45%] right-[-25px] sm:right-[-35px] transform -translate-y-1/2 hidden sm:block">
                <Icon.PaperPlane />
              </div>
            </div>

            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Smart, instant, and 24/7 chatbot to assist your business
            </p>

            <div className="mt-10 relative inline-block">
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-50 rounded-lg -z-10 transform scale-105" />
              <button
                className="relative bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg flex items-center space-x-2 shadow-xl transition mx-auto cursor-pointer"
                onClick={handleClick}
              >
                <span>Try For Free</span>
                <Icon.ExternalLink />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
