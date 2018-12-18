"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureMonospaced = (text) => text.length;
exports.wrap = (text, width = 80, measureText = exports.measureMonospaced) => {
    const wrapped = [];
    const lines = text.trim().replace(/\r\n/g, '\n').split('\n');
    const pushWithEnsureSingleNewline = (line) => {
        if (wrapped[wrapped.length - 1] === '' && line.trim() === '')
            return;
        wrapped.push(line.trim());
    };
    lines.forEach(line => {
        if (line === '') {
            pushWithEnsureSingleNewline(line);
            return;
        }
        const words = line.split(' ').filter(s => s.trim() !== '');
        let currentWidth = 0;
        let currentLine = '';
        words.forEach(word => {
            const wordWidth = measureText(word);
            const wordWidthWithSpace = measureText(word + ' ');
            if (currentWidth + wordWidth <= width) {
                currentWidth += wordWidthWithSpace;
                currentLine += word + ' ';
            }
            else {
                pushWithEnsureSingleNewline(currentLine);
                currentLine = word + ' ';
                currentWidth = wordWidthWithSpace;
            }
        });
        pushWithEnsureSingleNewline(currentLine);
    });
    return wrapped;
};
//# sourceMappingURL=index.js.map