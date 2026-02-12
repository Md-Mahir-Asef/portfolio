import { Mail, Copy, Check } from "lucide-react";

interface EmailCardProps {
    copiedStates: { [key: string]: boolean };
    copyToClipboard: (text: string, id: string) => void;
}

const EmailCard = ({ copiedStates, copyToClipboard }: EmailCardProps) => {
    return (
        <div
            className="group relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 scroll-reveal hover:border-purple-500/50 transition-all duration-300"
            style={{ animationDelay: "0s" }}
        >
            {/* Animated gradient circles at corners */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"></div>
            <div
                className="absolute top-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                style={{ animationDelay: "0.2s" }}
            ></div>
            <div
                className="absolute bottom-2 left-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 animate-grow-shrink"
                style={{ animationDelay: "0.4s" }}
            ></div>
            <div
                className="absolute bottom-2 right-2 w-3 h-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-grow-shrink"
                style={{ animationDelay: "0.6s" }}
            ></div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-2 hover:rotate-360 transition-transform duration-500 ease-in-out">
                        <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                            Email
                        </h3>
                        <p className="text-gray-300 text-sm">
                            mdmahirasef.dev@gmail.com
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <a
                        href="mailto:mdmahirasef.dev@gmail.com"
                        className="px-4 py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                    >
                        Open
                    </a>
                    <button
                        onClick={() =>
                            copyToClipboard(
                                "mdmahirasef.dev@gmail.com",
                                "email",
                            )
                        }
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${copiedStates.email ? "bg-green-500 text-white" : "bg-[#2A2A2A] border border-[#444444] text-gray-300 hover:border-purple-500 hover:text-purple-400"}`}
                        title={copiedStates.email ? "Copied!" : "Copy link"}
                    >
                        {copiedStates.email ? (
                            <Check className="w-4 h-4" />
                        ) : (
                            <Copy className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>
            <div className="w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mt-4 opacity-30"></div>
        </div>
    );
};

export default EmailCard;
