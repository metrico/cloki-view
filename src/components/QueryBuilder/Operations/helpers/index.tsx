// this one should receive a callback with an event

interface CommonFormatProps {
    result: string;
    build(initial: string): string;
}

interface JSONBuilderObjProps extends CommonFormatProps {
    expressions: string[];
    expressionsString: string;
    setJSON(initial: string): string;
    addExpression(expression: string): void;
    setExpressions(): void;
}

type JSONBuilderFn = () => CommonFormatProps;

export const JSONBuilder: JSONBuilderFn = () => ({
    result: "",
    expressions: [],
    expressionsString: "",
    setJSON(this: JSONBuilderObjProps, initial: string) {
        if (initial !== "") {
            this.result += initial + " | json";
        }

        return this.result;
    },
    addExpression(this: JSONBuilderObjProps, expression: string) {
        this.expressions = [...this.expressions, expression];
    },

    setExpressions(this: JSONBuilderObjProps) {
        this.expressionsString = this.expressions.join(" ");
    },

    build(this: JSONBuilderObjProps, initial: string = "") {
        this.setJSON(initial);
        if (this.expressions.length > 0) {
            this.setExpressions();
            return this.result + " " + this.expressionsString;
        }
        return this.result;
    },
});

export interface LogFmtBuilderProps extends CommonFormatProps {
    setLogFmt(): string;
}

export type LogFmtFn = () => LogFmtBuilderProps;
// add each as a prop inside the main builder
//

export const LogFmtBuilder: LogFmtFn = () => ({
    result: "",
    setLogFmt(this: LogFmtBuilderProps) {
        this.result += " | logfmt";
        return this.result;
    },
    build(this: any, initial: string) {
        this.result += initial + this.setLogFmt();
        return this.result;
    },
});

export interface UnwrapBuilderProps extends CommonFormatProps {
    setUnwrapFmt(): string;
}

export type UnwrapFmtFn = () => UnwrapBuilderProps;
// add each as a prop inside the main builder
//

export const UnwrapBuilder: UnwrapFmtFn = () => ({
    result: "",
    setUnwrapFmt(this: UnwrapBuilderProps) {
        this.result += " | unwrap";
        return this.result;
    },
    build(this: any, initial: string) {
        this.result += initial + this.setUnwrapFmt();
        return this.result;
    },
});

export interface UnPackBuilderProps extends CommonFormatProps {
    setUnPack(): string;
}

export type UnPackFn = () => UnPackBuilderProps;
// add each as a prop inside the main builder
//

export const UnPackBuilder: UnPackFn = () => ({
    result: "",
    setUnPack(this: UnPackBuilderProps) {
        this.result += " | unpack";
        return this.result;
    },
    build(this: any, initial: string) {
        this.result += initial + this.setUnPack();
        return this.result;
    },
});

export interface RegexFmtBuilderProps {
    result: string;
    expression: string;
    setRegex(intial: string): void;
    setExpression(expression: string): void;
    setText(): void;
    build(initial: string): string;
}

export type RegexFmtFn = () => RegexFmtBuilderProps;

export const RegexFmtBuilder: RegexFmtFn = () => ({
    result: "",
    expression: "",
    setRegex(this: RegexFmtBuilderProps, initial: string) {
        this.result = initial + " | regexp";
    },
    setExpression(this: RegexFmtBuilderProps, expression: string) {
        this.expression = expression || "";
    },
    setText(this: RegexFmtBuilderProps) {
        this.result += " `" + this.expression + "`";
    },
    build(this: RegexFmtBuilderProps, initial: string) {
        this.setRegex(initial);
        this.setText();
        return this.result;
    },
});

export interface PatternFmtBuilderProps {
    result: string;
    expression: string;
    setPattern(intial: string): void;
    setExpression(expression: string): void;
    setText(): void;
    build(initial: string, expression: string): string;
}

export type PatternFmtFn = () => PatternFmtBuilderProps;

export const PatternFmtBuilder: PatternFmtFn = () => ({
    result: "",
    expression: "",
    setPattern(this: PatternFmtBuilderProps, initial: string) {
        this.result = initial + " | pattern";
    },
    setExpression(this: PatternFmtBuilderProps, expression: string) {
        this.expression = expression || "";
    },
    setText(this: PatternFmtBuilderProps) {
        this.result += " `" + this.expression + "`";
    },
    build(this: PatternFmtBuilderProps, initial: string, expression: string) {
        this.setPattern(initial);
        this.setText();
        return this.result;
    },
});

export interface LineFmtBuilderProps {
    result: string;
    expression: string;
    setLine(intial: string): void;
    setText(): void;
    setExpression(expression: string): void;
    build(initial: string, expression: string): string;
}

export type LineFmtFn = () => LineFmtBuilderProps;

export const LineFmtBuilder: LineFmtFn = () => ({
    result: "",
    expression: "",
    setLine(this: LineFmtBuilderProps, initial: string) {
        this.result = initial + " | line_format";
    },
    setExpression(this: LineFmtBuilderProps, expression: string) {
        this.expression = expression || "";
    },
    setText(this: LineFmtBuilderProps) {
        this.result += " `" + this.expression + "`";
    },
    build(this: LineFmtBuilderProps, initial: string, expression: string) {
        this.setLine(initial);
        this.setText();
        return this.result;
    },
});

export interface RangeBuilderProps {
    result: string;
    range: string;
    setFn(initial: string): void;
    setRange(range: string): void;
    setRate(): void;
    build(initial: string): string;
}

// this one will be for this range fuctions:

export type SimpleRangeOperator =
    | "rate"
    | "rate_counter"
    | "count_over_time"
    | "sum_over_time"
    | "bytes_rate"
    | "bytes_over_time"
    | "absent_over_time";

export type RangeFn = (rangeType: SimpleRangeOperator) => RangeBuilderProps;

export const RangeBuilder: RangeFn = (rangeType: SimpleRangeOperator) => ({
    result: "",
    range: "",

    setFn(initial: string) {
        this.result = `${rangeType}(${initial}`;
    },
    // range should be set before building always!
    setRange(range: string) {
        this.range = range;
    },
    setRate() {
        this.result += ` [${this.range}])`;
    },

    build(initial: string) {
        this.setFn(initial);
        this.setRate();
        return this.result;
    },
});

// from RANGE FUNCTIONS COULD BE ONLY ONE PER QUERY
// * STEPS:

// - iniit      ==> res = RangeBuilder( rageType )

// - set range  ===> res.setRange('[range]')
// - build      ===> res.build()

export type LabelRangeOperator =
    | "avg_over_time"
    | "min_over_time"
    | "max_over_time"
    | "first_over_time"
    | "last_over_time"
    | "stdvar_over_time"
    | "stddev_over_time";

export interface LabelRangeProps {
    result: string;
    range: string;
    labels: string[];
    labelsString: string;
    setFn(initial: string): void;
    updRange(range: string): void;
    setRange(): void;
    addLabel(label: string): void;
    setLabels(): void;
    build(initial: string): string;
}
export type LabelRangeFn = (rangeType: LabelRangeOperator) => LabelRangeProps;

export const LabelRangeBuilder: LabelRangeFn = (
    rangeType: LabelRangeOperator
) => ({
    result: "",
    range: "",
    labels: [],
    labelsString: "",
    setFn(initial: string) {
        this.result = `${rangeType}(${initial}`;
    },
    updRange(range: string) {
        this.range = range;
    },
    setRange() {
        this.result += `[${this.range}])`;
    },
    addLabel(label: string) {
        this.labels = [...this.labels, label];
    },

    setLabels() {
        this.labelsString = this.labels.join(",");
    },

    build(initial: string) {
        this.setFn(initial);
        this.setRange();
        if (this.labels.length > 0) {
            this.setLabels();
            return (this.result += ` by(${this.labelsString})`);
        }

        return this.result;
    },
});

// 'quantile_over_time' // this one should be splitted ad quantile

export type QuantileRangeOperator = "quantile_over_time";

//quantile will be label selection with a quantile amount input

export const FormatOperators: any = {
    json: JSONBuilder,
    logfmt: LogFmtBuilder,
    unpack: UnPackBuilder,
    regexp: RegexFmtBuilder,
    pattern: PatternFmtBuilder,
    line_format: LineFmtBuilder,
    unwrap: UnwrapBuilder,
};
// add by and without functions
// this functions are at the end of operation
export const RangeOperators: any = (rangeType: any) => ({
    range: RangeBuilder(rangeType),
    label_range: LabelRangeBuilder(rangeType)
});

// rate functions with a range
// rate funcitons with a range and label selection option
//
