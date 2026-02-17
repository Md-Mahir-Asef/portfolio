// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
    language: string;
    children: string;
}

export default function CodeBlock({ language, children }: CodeBlockProps) {
    return (
        <div className="my-6 rounded-lg overflow-hidden border border-[#333333]">
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    padding: "1rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    backgroundColor: "#1A1A1A",
                }}
                codeTagProps={{
                    className: "text-gray-300",
                }}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
}
