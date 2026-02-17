import { Mail, Copy, Check } from "lucide-react";

interface EmailCardProps {
    copiedStates: { [key: string]: boolean };
    copyToClipboard: (text: string, id: string) => void;
}

const EmailCard = ({ copiedStates, copyToClipboard }: EmailCardProps) => {
    return (
        <div
            className="group relative bg-[#1A1A1A] border border-[#333333] rounded-xl p-4 xs:p-6 scroll-reveal hover:border-purple-500/50 transition-all duration-300"
            style={{ animationDelay: "0s" }}
        >
            {/* Content */}
            <div className="relative z-10 h-full flex flex-row">
                <div className="flex items-center space-x-3 xs:space-x-4 flex-1 w-full xs:w-auto min-w-fit">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 bg-[#2A2A2A] border border-[#444444] rounded-lg flex items-center justify-center p-1.5 xs:p-2 hover:rotate-360 transition-transform duration-500 ease-in-out shrink-0">
                        <Mail className="w-5 h-5 xs:w-6 xs:h-6 text-blue-400" />
                    </div>
                    <div className="flex-1 flex-col min-w-0">
                        <h3 className="text-base xs:text-lg font-semibold text-white">
                            Email
                        </h3>
                        <p className="text-xs text-gray-300 xs:text-sm">
                            mdmahirasef.dev@gmail.com
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 xs:space-y-4 w-full xs:w-auto">
                    <div className="flex items-center justify-end">
                        <button
                            onClick={() =>
                                copyToClipboard(
                                    "mdmahirasef.dev@gmail.com",
                                    "email",
                                )
                            }
                            className={`w-8 h-8 xs:w-10 xs:h-10 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ${copiedStates.email ? "bg-green-500 text-white" : "bg-[#2A2A2A] border border-[#444444] text-gray-300 hover:border-purple-500 hover:text-purple-400"}`}
                            title={copiedStates.email ? "Copied!" : "Copy link"}
                        >
                            {copiedStates.email ? (
                                <Check className="w-3 h-3 xs:w-4 xs:h-4" />
                            ) : (
                                <Copy className="w-3 h-3 xs:w-4 xs:h-4" />
                            )}
                        </button>
                    </div>
                    <div className="flex items-center justify-end">
                        <a
                            href="mailto:mdmahirasef.dev@gmail.com"
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

export default EmailCard;
