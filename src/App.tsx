import { useEffect, useRef, useState } from "react";
import { renderCanvas } from "./utils/util-fns";
import { ThemeKey, themes } from "./utils/themes";
import { useWindowDimensions } from "./utils/custom-hooks";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "./utils/constants";

enum Token {
    Keyword = "Keyword",
    Punctuator = "Punctuator",
    Numeric = "Numeric",
    Identifier = "Identifier",
    Null = "Null",
    String = "String",
    ColoredText = "ColoredText",
}

export enum Font {
    Monospace = "monospace",
    SansSerif = "sans-serif",
    Serif = "serif",
    Monaco = "Monaco",
    Arial = "Arial",
}

export type Theme = {
    [key in Token | "Background"]: string;
};

function InputLabel({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div className="w-full">
            <p>{label}</p>
            {children}
        </div>
    );
}

function App() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const windowDimensions = useWindowDimensions();

    // settings
    const [text, setText] = useState("Hello, World");
    const [codeFontSize, setCodeFontSize] = useState(16);
    const [font, setFont] = useState(Font.Arial);
    const [themeKey, setThemeKey] = useState<ThemeKey>("Terminal");

    const [isExporting, setIsExporting] = useState(false);
    const [exportOptions, setExportOptions] = useState({
      name: "text_in_code.png",
        width: DEFAULT_WIDTH.toString(),
        height: DEFAULT_HEIGHT.toString(),
    });

    const theme = themes[themeKey];

    useEffect(() => {
        renderCanvas(
            canvasRef.current,
            codeFontSize,
            font,
            text,
            windowDimensions.width || DEFAULT_WIDTH,
            windowDimensions.height || DEFAULT_HEIGHT,
            theme
        );
    }, [text, windowDimensions, codeFontSize, font, canvasRef, theme]);

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleChangeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCodeFontSize(Number(e.target.value) || 16);
    };

    const handleChangeFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFont(e.target.value as Font);
    };

    const handleChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setThemeKey(e.target.value as ThemeKey);
    };

    const handleExport = () => {
        setIsExporting(!isExporting);
    };

    const handleDownload = () => {
      const downloadDimensions = {
        width: Number(exportOptions.width) || DEFAULT_WIDTH,
        height: Number(exportOptions.height) || DEFAULT_HEIGHT,
      };
        renderCanvas(
            canvasRef.current,
            codeFontSize,
            font,
            text,
            downloadDimensions.width,
            downloadDimensions.height,
            theme
        )
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const dataURL = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = exportOptions.name;
        a.click();
        renderCanvas(
            canvasRef.current,
            codeFontSize,
            font,
            text,
            windowDimensions.width || DEFAULT_WIDTH,
            windowDimensions.height || DEFAULT_HEIGHT,
            theme
        );
    };

    return (
        <div className="flex flex-col md:flex-row-reverse">
            <div className="flex flex-col gap-2 mx-2 items-center flex-wrap w-min" id="sidebar">
                <div className="">
                    <h1 className="text-2xl font-extrabold">text_in_code</h1>
                    <p>Write your name in code</p>
                </div>
                <div className="flex gap-2 items-center flex-wrap my-2">
                    <InputLabel label="text">
                        <input
                            onChange={handleChangeText}
                            value={text}
                            type="text"
                            className="rounded-md border-black border-2 text-black"
                        />
                    </InputLabel>
                    <InputLabel label="theme">
                        <select
                            className="rounded-md border-black border-2 w-full text-black"
                            value={themeKey}
                            onChange={handleChangeTheme}
                        >
                            {Object.keys(themes).map((theme) => (
                                <option key={theme} value={theme}>
                                    {theme}
                                </option>
                            ))}
                        </select>
                    </InputLabel>
                    <InputLabel label="font">
                        <select
                            className="rounded-md border-black border-2 w-full text-black"
                            value={font}
                            onChange={handleChangeFont}
                        >
                            {Object.values(Font).map((font) => (
                                <option key={font} value={font}>
                                    {font}
                                </option>
                            ))}
                        </select>
                    </InputLabel>
                    <InputLabel label="code font size">
                        <input
                            onChange={handleChangeFontSize}
                            value={codeFontSize}
                            type="number"
                            className="rounded-md border-black border-2 text-black"
                        />
                    </InputLabel>

                    <div className="relative">
                        <button
                            onClick={handleExport}
                            className="rounded-md border-black border-2 p-2"
                        >
                            Export
                        </button>
                        {isExporting && (
                            <div className="bg-white border-2 border-black mt-2 p-2">
                                <InputLabel label="file name">
                                    <input
                                        onChange={(e) =>
                                            setExportOptions({
                                                ...exportOptions,
                                                name: e.target.value,
                                            })
                                        }
                                        value={exportOptions.name}
                                        type="text"
                                        className="rounded-md border-black border-2 text-black"
                                    />
                                </InputLabel>
                                <InputLabel label="width (px)">
                                    <input
                                        onChange={(e) =>
                                            setExportOptions({
                                                ...exportOptions,
                                                width: e.target.value,
                                            })
                                        }
                                        value={exportOptions.width}
                                        type="text"
                                        className="rounded-md border-black border-2 text-black"
                                    />
                                </InputLabel>
                                <InputLabel label="height (px)">
                                    <input
                                        onChange={(e) =>
                                            setExportOptions({
                                                ...exportOptions,
                                                height: e.target.value,
                                            })
                                        }
                                        value={exportOptions.height}
                                        type="text"
                                        className="rounded-md border-black border-2 text-black"
                                    />
                                </InputLabel>
                                <button
                                    onClick={handleDownload}
                                    className="rounded-md border-black border-2 p-2 mt-2"
                                >
                                    Download
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <canvas
                style={{
                    backgroundColor: theme.Background,
                }}
                ref={canvasRef}
                width={windowDimensions.width}
                height={windowDimensions.height}
            />
        </div>
    );
}

export default App;
