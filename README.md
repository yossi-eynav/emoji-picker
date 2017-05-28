# React Emoji Picker 0.0.1-RC
An easy to use React Emoji Picker Module. Live demo: https://ealush.github.io/emoji-picker/

## Usage:
```js
import React, {Component} from 'react';
import EmojiPicker from '';


class MyComponent extends Component {

    render() {
        return (
            <EmojiPicker assetPath={YourAssetsURL}/>
        );
    }
}

```

## Image hosting
Note, the image files for the emojis are not included in this module, as you need a web server to host and serve all these assets. Provided in this repository (under 'assets' directory), three versions of the supported emojis: 32x32, 64x64, 128x128.

To use them, you will need to host them on your web-server, and pass Emoji Picker the url in which the images are stored. Say you host the images under `http://my-site.com/emojis`, you will need to supply this url to the picker like this:

```js
<EmojiPicker assetPath="http://my-site.com/emojis"/>
```

## Customization
At the moment, not many customizations are supported (they are coming). You may choose, though, to have the navigation in different locations. You may choose any of the following three:
```js
 <EmojiPicker assetPath={YourAssetsURL} nav="top"/> // default. no need to pass
 <EmojiPicker assetPath={YourAssetsURL} nav="left"/>
 <EmojiPicker assetPath={YourAssetsURL} nav="bottom"/>
```

## Attributions
All emoji images stored in this project are the property of the Emojione company (www.emojione.com).