# [cz-conventional-changelog-atom](https://www.npmjs.com/package/cz-conventional-changelog-atom)

*This is a fork from [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog).*

![cz-conventional-changelog-atom](./img/cz-conventional-changelog-atom.png?raw=true)

## Install with [yarn](https://github.com/yarnpkg/yarn)

```js
yarn add --dev cz-conventional-changelog-atom
commitizen init cz-conventional-changelog-atom --save-dev --save-exact
```

The command should add this to your package.json:
```
{
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog-atom"
    }
  }
}
```

## Preview

* **""** when when finding no applicable emoji (AKA make a commit without an emoji)
* :art: `:art:` when improving the format/structure of the code
* :racehorse: `:racehorse:` when improving performance
* :non-potable_water: `:non-potable_water:` when plugging memory leaks
* :memo: `:memo:` when writing docs
* :penguin: `:penguin:` when fixing something on Linux
* :apple: `:apple:` when fixing something on Mac OS
* :checkered_flag: `:checkered_flag:` when fixing something on Windows
* :bug: `:bug:` when fixing a bug
* :fire: `:fire:` when removing code or files
* :green_heart: `:green_heart:` when fixing the CI build
* :white_check_mark: `:white_check_mark:` when adding tests
* :lock: `:lock:` when dealing with security
* :arrow_up: `:arrow_up:` when upgrading dependencies
* :arrow_down: `:arrow_down:` when downgrading dependencies
* :shirt: `:shirt:` when removing linter warnings

Based on [Atom's contribution message guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages).

## License

Copyright (c) 2016, Ethan Rubio

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Source: http://opensource.org/licenses/ISC