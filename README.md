# GPT Custom Controls

## Overview

The "GPT Custom Controls" Chrome extension modifies certain default behaviors on `chat.openai.com`, making the chatting experience more efficient. 

## Current Functionalities

### Message Submission
- Pressing the Enter key within the chat area will insert a new line, overriding the default behavior of submitting the message.
- Using Ctrl+Enter (or Cmd+Enter on a Mac) within a form element will submit the message.

### Temporary Storage
- The extension automatically saves your text in the chat area to localStorage with every keystroke.
- On reloading the page, the saved text will be populated into the chat area.
- If the first keystroke after the page reload is a 'Delete' or 'Backspace', the saved text will be removed.

## Installation

1. Download or clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Toggle on "Developer mode" at the top-right corner.
4. Click on "Load unpacked" and select the directory where you've saved this extension.

## Usage

Once installed, navigate to `chat.openai.com`. The extension will automatically apply the custom key behaviors within form elements on this domain.
