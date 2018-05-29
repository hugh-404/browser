B = (function x() {}) [-5] == 'x' ? 'FF3' : (function x() {}) [-6] == 'x' ? 'FF2': /a/[-1] == 'a' ? 'FF' : '\v' == 'v' ? 'IE' : /a/.__proto__ == '//'?'Saf':/s/.test(/a/.toString)?'Chr':/^function \(/.test([].sort)?'Op':'Unknown'

details:

FF = /a/[-1] == 'a'

FF3 = (function x() {}) [-5] == 'x'

FF2 = (function x() {}) [-6] == 'x'

IE = '\v' == 'v'

Saf = /a/.__proto__ == '//'

Chr = /source/.test((/a/.toString + ''))

Op = /^function \(/.test([].sort)
