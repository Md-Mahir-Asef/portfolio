import { Copy, Check } from "lucide-react";

interface TwitterCardProps {
    copiedStates: { [key: string]: boolean };
    copyToClipboard: (text: string, id: string) => void;
}

const TwitterCard = ({ copiedStates, copyToClipboard }: TwitterCardProps) => {
    return (
        <div
            className="group relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-4 xs:p-6 scroll-reveal hover:border-purple-500/50 transition-all duration-300"
            style={{ animationDelay: "0.3s" }}
        >
            {/* Content */}
            <div className="relative z-10 h-full flex flex-row">
                <div className="flex items-center space-x-3 xs:space-x-4 flex-1 w-full xs:w-auto min-w-fit">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-1.5 xs:p-2 hover:rotate-360 transition-transform duration-500 ease-in-out shrink-0">
                        <img
                            src="/images/x-white.png"
                            alt="X"
                            className="w-5 h-5 xs:w-6 xs:h-6"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-base xs:text-lg font-semibold text-white mb-1">
                            X
                        </h3>
                        <p className="text-gray-300 text-xs xs:text-sm">
                            x.com/MdMahirAsef
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 xs:space-y-4 w-full xs:w-auto">
                    <div className="flex items-center justify-end">
                        <button
                            onClick={() =>
                                copyToClipboard(
                                    "https://x.com/MdMahirAsef",
                                    "x",
                                )
                            }
                            className={`w-8 h-8 xs:w-10 xs:h-10 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ${copiedStates.twitter ? "bg-green-500 text-white" : "bg-[#2A2A2A] border border-[#444444] text-gray-300 hover:border-purple-500 hover:text-purple-400"}`}
                            title={
                                copiedStates.twitter ? "Copied!" : "Copy link"
                            }
                        >
                            {copiedStates.twitter ? (
                                <Check className="w-3 h-3 xs:w-4 xs:h-4" />
                            ) : (
                                <Copy className="w-3 h-3 xs:w-4 xs:h-4" />
                            )}
                        </button>
                    </div>
                    <div className="flex items-center justify-end">
                        <a
                            href="https://x.com/MdMahirAsef"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 xs:px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white text-xs xs:text-sm rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                        >
                            Open
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mt-3 xs:mt-4 opacity-30"></div>
        </div>
    );
};

export default TwitterCard;
