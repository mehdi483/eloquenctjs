// 1. car and cat
let regex1 = /ca[rt]/;

// 2. pop and prop
let regex2 = /pr?op/;

// 3. ferret, ferry, and ferrari
let regex3 = /ferr(et|y|ari)/;

// 4. Any word ending in ious
let regex4 = /\w*ious\b/;

// 5. A whitespace character followed by a period, comma, colon, or semicolon
let regex5 = /\s[\.,:;]/;

// 6. A word longer than six letters
let regex6 = /\w{6}\w*/;

// 7. A word without the letter e (or E)
let regex7 = /\b[^\We]+\b/i;
