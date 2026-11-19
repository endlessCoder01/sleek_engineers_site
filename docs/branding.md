# Logo assets

- Website logo: `public/sleek-engineering-logo-transparent.png`
- Browser icon: `app/icon.png` (64 × 64, transparent)
- Original reference: `public/sleek-engineering-logo.jpeg`
- Editing method: built-in imagegen, transparent background enabled.
- The browser icon is a small render of the extracted symbol using Next.js ImageResponse.

The website uses the complete logo without a background, crop offsets, or a surrounding badge. A gentle hover lift respects reduced-motion preferences. The larger homepage logo has a subtle blue glow supplied by CSS.

## Final imagegen prompt

Image 1 was the initial transparent extraction; image 2 was the original reference.

> Use case: background-extraction. Image 1 is the edit target, a background-removed logo with unwanted cyan speckles, stray fragments, and rough edges. Image 2 is the authoritative original logo reference. Clean up image 1 into an immaculate professional logo cutout on true transparency. Remove every cyan streak, stray blue speckle, dark fringe, rough fragment and fuzzy halo outside the intended logo shapes and inside all intended negative spaces. Make the interlocking blue symbol and the words SLEEK ENGINEERING have clean smooth vector-like contours, solid opaque blue interiors and anti-aliased edges. Use the original medium-bright blue from image 2; a clean flat blue is preferable to any texture/noise. Preserve the exact original symbol geometry and original font letter shapes, text, proportions, layout and spacing from image 2. Keep SLEEK bold and ENGINEERING thinner as in the original. No redesign, no new decorative elements, no shadow, no glow, no outlines. Only the logo itself should be opaque; everything else alpha 0, including all holes. Center and fit the complete stacked logo in a tight frame with a small even transparent margin. Output a high-resolution transparent PNG.
