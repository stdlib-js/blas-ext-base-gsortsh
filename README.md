<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# gsortsh

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Sort a strided array using Shellsort.



<section class="usage">

## Usage

```javascript
import gsortsh from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gsortsh@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gsortsh@esm/index.mjs';
```

#### gsortsh( N, order, x, stride )

Sorts a strided array `x` using Shellsort.

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0 ];

gsortsh( x.length, 1.0, x, 1 );
// x => [ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array is sorted in **decreasing** order. If `order > 0.0`, the input strided array is sorted in **increasing** order. If `order == 0.0`, the input strided array is left unchanged.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to sort every other element

```javascript
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

var x = [ 1.0, -2.0, 3.0, -4.0 ];
var N = floor( x.length / 2 );

gsortsh( N, -1.0, x, 2 );
// x => [ 3.0, -2.0, 1.0, -4.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

// Initial array...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Sort every other element...
gsortsh( N, -1.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, 4.0, 3.0, 2.0 ]
```

#### gsortsh.ndarray( N, order, x, stride, offset )

Sorts a strided array `x` using Shellsort and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0 ];

gsortsh.ndarray( x.length, 1.0, x, 1, 0 );
// x => [ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

gsortsh.ndarray( 3, 1.0, x, 1, x.length-3 );
// x => [ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions return `x` unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^(4/3))`.
-   The algorithm is efficient for **shorter** strided arrays (typically `N <= 50`).
-   The algorithm is **unstable**, meaning that the algorithm may change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   The input strided array is sorted **in-place** (i.e., the input strided array is **mutated**).
-   Depending on the environment, the typed versions ([`dsortsh`][@stdlib/blas/ext/base/dsortsh], [`ssortsh`][@stdlib/blas/ext/base/ssortsh], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import gsortsh from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gsortsh@esm/index.mjs';

var rand;
var sign;
var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    rand = round( randu()*100.0 );
    sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
}
console.log( x );

gsortsh( x.length, -1.0, x, -1 );
console.log( x );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Shell, Donald L. 1959. "A High-Speed Sorting Procedure." _Communications of the ACM_ 2 (7). Association for Computing Machinery: 30–32. doi:[10.1145/368370.368387][@shell:1959a].
-   Sedgewick, Robert. 1986. "A new upper bound for Shellsort." _Journal of Algorithms_ 7 (2): 159–73. doi:[10.1016/0196-6774(86)90001-5][@sedgewick:1986a].
-   Ciura, Marcin. 2001. "Best Increments for the Average Case of Shellsort." In _Fundamentals of Computation Theory_, 106–17. Springer Berlin Heidelberg. doi:[10.1007/3-540-44669-9_12][@ciura:2001a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/dsortsh`][@stdlib/blas/ext/base/dsortsh]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using Shellsort.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/gsort2sh`][@stdlib/blas/ext/base/gsort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/ssortsh`][@stdlib/blas/ext/base/ssortsh]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using Shellsort.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gsortsh.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gsortsh

[test-image]: https://github.com/stdlib-js/blas-ext-base-gsortsh/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-gsortsh/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gsortsh/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gsortsh?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gsortsh.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gsortsh/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gsortsh/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gsortsh/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gsortsh/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gsortsh/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gsortsh/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@shell:1959a]: https://doi.org/10.1145/368370.368387

[@sedgewick:1986a]: https://doi.org/10.1016/0196-6774(86)90001-5

[@ciura:2001a]: https://doi.org/10.1007/3-540-44669-9_12

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsortsh]: https://github.com/stdlib-js/blas-ext-base-dsortsh/tree/esm

[@stdlib/blas/ext/base/gsort2sh]: https://github.com/stdlib-js/blas-ext-base-gsort2sh/tree/esm

[@stdlib/blas/ext/base/ssortsh]: https://github.com/stdlib-js/blas-ext-base-ssortsh/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
