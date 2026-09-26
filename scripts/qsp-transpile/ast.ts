export type QspNode =
  | QspScene
  | QspIf
  | QspWhile
  | QspDoWhile
  | QspAct
  | QspText
  | QspImage
  | QspTitle
  | QspAssign
  | QspGoto
  | QspGsCall
  | QspTime
  | QspSetup
  | QspExit
  | QspJump
  | QspLabel
  | QspComment
  | QspContinue
  | QspBreak
  | QspUnknown;

export interface QspLocation {
  name: string;
  title: string;
  region: string;
  locationType: string;
  locclass: string;
  scenes: QspScene[];
  topLevel: QspNode[];
  lineCount: number;
  unsupported: string[];
}

export interface QspScene {
  kind: 'scene';
  arg: string;
  body: QspNode[];
}

export interface QspIf {
  kind: 'if';
  condition: string;
  thenBody: QspNode[];
  elseBody: QspNode[];
}

export interface QspWhile {
  kind: 'while';
  condition: string;
  body: QspNode[];
}

export interface QspDoWhile {
  kind: 'dowhile';
  condition: string;
  body: QspNode[];
}

export interface QspAct {
  kind: 'act';
  label: string;
  body: QspNode[];
  inlineGoto?: { target: string; arg: string; arg2?: string; arg3?: string };
  inlineStatements?: string;
  inlineText?: string;
  inlineTextStyle?: string;
  inlineExit?: boolean;
  dynamicLabel?: boolean;
}

export interface QspText {
  kind: 'text';
  content: string;
  dynamic: boolean;
}

export interface QspImage {
  kind: 'image';
  src: string;
}

export interface QspTitle {
  kind: 'title';
  text: string;
}

export interface QspAssign {
  kind: 'assign';
  var: string;
  op: '=' | '+=' | '-=' | '*=' | '/=';
  value: string;
}

export interface QspGoto {
  kind: 'goto';
  target: string;
  arg: string;
  arg2?: string;
  arg3?: string;
  argQuoted?: boolean;
  arg2Quoted?: boolean;
  arg3Quoted?: boolean;
}

export interface QspGsCall {
  kind: 'gs';
  module: string;
  func: string;
  args: string[];
}

export interface QspTime {
  kind: 'time';
  delta: number;
}

export interface QspSetup {
  kind: 'setup';
  raw: string;
}

export interface QspExit {
  kind: 'exit';
}

export interface QspJump {
  kind: 'jump';
  label: string;
}

export interface QspLabel {
  kind: 'label';
  name: string;
}

export interface QspComment {
  kind: 'comment';
  text: string;
}

export interface QspContinue {
  kind: 'continue';
}

export interface QspBreak {
  kind: 'break';
}

export interface QspUnknown {
  kind: 'unknown';
  raw: string;
}
