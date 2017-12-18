import { ForumLexer } from 'imports/lib/syntax/lexer';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'view-editor',
  templateUrl: 'view-editor.html'
})
export class ViewEditorComponent {
  @ViewChild('text') textinput: ElementRef;
  @ViewChild('faux') faux: ElementRef;
  @ViewChild('lineFaux') lineFaux: ElementRef;
  @ViewChild('suggBox') suggBox: ElementRef;
  textValue: string;
  currentLine: string = '';

  fauxLines: Array<string>;

  lexer = new ForumLexer();

  buffer = '';
  inMention = false;
  inCallThread = false;
  showAutocomplete = false;

  constructor() {
    this.textValue = '';
    this.fauxLines = new Array();
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    $(this.faux.nativeElement).css('font-size', '1em');
    $(this.lineFaux.nativeElement).css('font-size', '1em');
    $(this.faux.nativeElement).css('font-family', 'Arial, Helvetica, sans-serif');
    $(this.lineFaux.nativeElement).css('font-family', 'Arial, Helvetica, sans-serif');
    $(this.suggBox.nativeElement).css('margin-top', 24 + 4);
  }
  
  getTextAreaCursorPositon(elem: HTMLTextAreaElement, text: string) {
    function getCurrentRow(textarea: HTMLTextAreaElement) {
      return textarea.value.substr(0, textarea.selectionStart).split("\n").length;
    }

    function getCaret(el: HTMLTextAreaElement): number {
      return el.selectionStart;
    }

    const caretpos = getCaret(elem);

    const currentLineText = this.fauxLines[getCurrentRow(elem) - 1];
    this.currentLine = currentLineText;

    //const calcfaux = $(this.lineFaux.nativeElement).text(currentLineText);
    const fauxWidthPos = $(this.lineFaux.nativeElement).width();
    //$(this.lineFaux.nativeElement).outerWidth();

    console.log($(this.lineFaux.nativeElement).width());
    const fauxHeightPos = $(this.faux.nativeElement).outerHeight();

    

    return {
      width: fauxWidthPos,
      height: (fauxHeightPos * getCurrentRow(elem)) + (4 - (getCurrentRow(elem) * .31))
    };
  }
  
  changed(text: string, _this: HTMLTextAreaElement) {

    let currentCur = _this.selectionStart;
    let currentRow = text.substr(0, currentCur).split("\n").length;

    this.fauxLines = text.split(/\n/);
    let currentRowText = this.fauxLines[currentRow - 1];

    let currentTextPosition = this.getTextAreaCursorPositon(_this, currentRowText);

    let isEditing = currentRowText.length !== currentCur;
    let afterText = currentRowText.slice(currentCur, currentRowText.length - 1);
    let beforeText = currentRowText.replace(afterText, '');


    $(this.suggBox.nativeElement).css('margin-left', currentTextPosition.width + 15);
    $(this.suggBox.nativeElement).css('margin-top', currentTextPosition.height);
  }

  keydown(event: KeyboardEvent) {
    if (event.key === '@') {
      // mention
      this.inMention = true;
      this.showAutocomplete = true;
    } else if (event.key !== '\'' && this.inMention && this.buffer === '@') {
      // search user nickname
      this.inMention = false;
      this.showAutocomplete = false;
    } else if (event.key === '\'' && this.buffer === '@') {
      this.inMention = true;
      this.showAutocomplete = true;
    } else if (this.inMention && this.buffer === '\'') {
      this.inMention = false;
      this.showAutocomplete = false;
    } else if (event.key === '>' && this.buffer === '>') {
      this.inCallThread = true;
      this.showAutocomplete = true;
    } else if (this.inCallThread && event.key.match(/\d/) !== null) {
      this.inCallThread = true;
      this.showAutocomplete = true;
    } else {
      this.inCallThread = false;
      this.inMention = false;
      this.showAutocomplete = false;
    }

    this.buffer = event.key;
  }
}