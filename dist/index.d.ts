export declare type MeasureText = (text: string) => number;
export declare const measureMonospaced: MeasureText;
export declare const wrap: (text: string, width?: number, measureText?: MeasureText) => string[];
