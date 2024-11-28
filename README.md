# Control Characters Viewer Chrome Extension

A Chrome extension that allows users to toggle the visibility of control characters (ASCII 0-31) in webpage text. Control characters are displayed as red highlights with a "␃" symbol.

_"Have you ever had an issue where someone sent you a webdesign, you copy the text and then you get these unexplained hidden characters which appear in certain browsers. Well... they are called control characters and this extension is for you!"_

## Features

- Toggle control characters visibility with a single click
- Highlights control characters in red with white text
- Preserves original text content
- Works on all websites
- Simple and intuitive user interface

## Installation

1. Clone or download this repository to your local machine
2. Open Google Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top right corner
4. Click "Load unpacked" button
5. Select the directory containing the extension files

## Usage

1. Click the extension icon in your Chrome toolbar to open the popup
2. Click the "Enable Control Characters" button to show control characters
3. Click "Disable Control Characters" to return to normal text display
4. The button color changes to indicate the current state:
   - Green: Control characters are hidden (default)
   - Red: Control characters are visible

## Files Structure

control-characters-viewer/  
├── manifest.json # Extension configuration  
├── popup.html # Popup interface  
├── popup.js # Popup functionality  
├── content.js # Main extension logic  
└── LICENSE # GPL-3.0 License file

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

This means you are free to:

- Use this software for any purpose
- Change the software to suit your needs
- Share the software with your friends and neighbors
- Share the changes you make

For more information about the GPL-3.0 license, visit [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html).
