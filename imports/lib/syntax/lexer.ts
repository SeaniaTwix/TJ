import { LexerFactory, matches, or } from "typed-lexer";

interface State {
  indent: number[];
  start: boolean;
}

type Token =  'Mention' | 'MentionStart' | 'MentionEnd' |
              'CallThreadStart' | 'CallThreadEnd' | 'Character' |
              'ThreadNumber' | 'CallThread' | 'Nickname';

export class ForumLexer extends LexerFactory<Token, State> {
  constructor() {
    super({ indent: [0], start: true });

    this.addRuleWithRegexGroups(/(@')(.*?)(')/, ['MentionStart', 'Nickname', 'MentionEnd']);
    this.addSimpleRule('@', 'Mention');

    this.addRuleWithRegexGroups(/(>>)(\d+)/, ['CallThread', 'ThreadNumber']);
    this.addSimpleRule('>>', 'CallThreadStart');

    this.addDefaultSimpleRule('Character');
  }
}