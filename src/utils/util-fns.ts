import { Font, Theme } from "../App";
import {
    sampleCode,
    skippedTokenChars,
    tokenizedSampleCode,
} from "./constants";

export function getImageArrayFromText(
    text: string,
    width: number,
    height: number,
    font: Font
) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return [];
    }

    let fontSize = 100;
    ctx.font = `${fontSize}px ${font}`;

    const textWidth = ctx.measureText(text).width;
    const newFontSize = Math.floor((width / textWidth) * fontSize);
    fontSize = Math.min(newFontSize, height);
    ctx.font = `${fontSize}px Arial`;

    ctx.fillStyle = "black";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(text, width / 2, height / 2);
    document.body.appendChild(canvas);

    const imageData = ctx.getImageData(0, 0, width, height);
    canvas.remove();
    const data = imageData.data;
    const imageArray = [];
    for (let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1] ?? 0;
        const blue = data[i + 2] ?? 0;
        const alpha = data[i + 3] ?? 0;
        if (red || green || blue || alpha) {
            imageArray.push(1);
        } else {
            imageArray.push(0);
        }
    }
    return imageArray;
}

export const renderCanvas = (
    canvas: HTMLCanvasElement | null,
    codeFontSize: number,
    font: Font,
    text: string,
    width: number,
    height: number,
    theme: Theme
) => {
    if (!canvas) {
        return;
    }
    canvas.width = width;
    canvas.height = height;
    const context = canvas?.getContext("2d");
    if (!context) {
        return;
    }

    context.font = `${codeFontSize}px ${Font.Monaco}`;
    context.fillStyle = "white";
    const textMetrics = context.measureText("a");
    // account of spacing between lines
    // gets smaller as font size decreases
    const offsetHeight = (codeFontSize / 10) * 4;
    const textHeight = textMetrics.actualBoundingBoxAscent + offsetHeight;
    const textWidth = textMetrics.width;

    const charsPerLine = Math.floor(width / textWidth);
    const numOfLines = Math.floor(height / textHeight);
    const totalNumOfChars = charsPerLine * numOfLines;
    const imageArray = getImageArrayFromText(
        text,
        charsPerLine,
        numOfLines,
        font
    );

    context.clearRect(0, 0, width, height);

    let currentTokenIndex = 0;
    let currentCharInTokenIndex = 0;

    for (let i = 0; i < totalNumOfChars; i++) {
        const currentLine = Math.floor(i / charsPerLine);
        const currentColumn = i % charsPerLine;
        const x = currentColumn * textWidth;
        const y = currentLine * textHeight + textHeight;

        const imageDataValue = imageArray[i];
        const token =
            tokenizedSampleCode[currentTokenIndex % tokenizedSampleCode.length];
        const tokenValue = token.value;

        if (imageDataValue) {
            context.fillStyle = theme.ColoredText;
        } else {
            context.fillStyle = theme[token.type as keyof Theme];
        }

        const currentChar = sampleCode[i % sampleCode.length];
        context.fillText(currentChar, x, y);

        if (!skippedTokenChars.includes(currentChar)) {
            if (currentCharInTokenIndex >= tokenValue.length - 1) {
                currentCharInTokenIndex = 0;
                currentTokenIndex++;
                continue;
            }
            currentCharInTokenIndex++;
        }
    }
};
