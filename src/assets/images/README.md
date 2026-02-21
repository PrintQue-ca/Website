# Images

Place the PrintQue logo here as `logo.png` if you want Astro to optimize it via import.

The site currently references the logo from `public/images/logo.png`. To use this folder instead, import the image in your component and use Astro's `<Image />` component:

```astro
---
import { Image } from 'astro:assets';
import logo from '../assets/images/logo.png';
---
<Image src={logo} alt="PrintQue" />
```
