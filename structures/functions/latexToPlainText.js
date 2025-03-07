const smallCapsMap = {
    A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ꜰ', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ', K: 'ᴋ', L: 'ʟ', M: 'ᴍ',
    N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ', S: 's', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ',
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ',
    n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
};

const superscriptMap = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾', 'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ',
    'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ',
    'p': 'ᵖ', 'q': 'ᑫ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ',
    'z': 'ᶻ', 'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ',
    'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'ˢ',
    'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ', '∘': '°', '.': '⋅', '/': '∕',
    '*': '*', ':': ':', ',': ',', '_': '-', '\'': 'ʼ', 'β': 'ᵝ', 'γ': 'ᵞ', 'δ': 'ᵟ', 'θ': 'ᶿ', 'ι': 'ᶥ',
    'φ': 'ᵠ', 'χ': 'ᵡ', 'λ': 'ᶫ', 'µ': 'ᶬ', 'ν': 'ᶰ', 'ρ': 'ᵨ', 'σ': 'ᶳ', 'τ': 'ᵗ', 'υ': 'ᶷ', 'ω': 'ᶹ',
    '∂': 'ᵟ', '∑': 'ᵴ', '|': '|', '!': '!', '#': '#', '@': '@', '^': '^', '&': '&', '`': '`', '~': '~'
};

const subscriptMap = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
    '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎', 'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
    'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ',
    'v': 'ᵥ', 'x': 'ₓ', 'y': 'ᵧ', 'β': 'ᵦ', 'ρ': 'ᵨ', 'φ': 'ᵩ', 'χ': 'ᵪ'
};

const mathbbMap = {
    A: '𝔸', B: '𝔹', C: 'ℂ', D: '𝔻', E: '𝔼', F: '𝔽', G: '𝔾', H: 'ℍ', I: '𝕀', J: '𝕁', K: '𝕂', L: '𝕃', M: '𝕄',
    N: 'ℕ', O: '𝕆', P: 'ℙ', Q: 'ℚ', R: 'ℝ', S: '𝕊', T: '𝕋', U: '𝕌', V: '𝕍', W: '𝕎', X: '𝕏', Y: '𝕐', Z: 'ℤ',
    a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘', h: '𝕙', i: '𝕚', j: '𝕛', k: '𝕜', l: '𝕝', m: '𝕞',
    n: '𝕟', o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥', u: '𝕦', v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫'
};

const processNested = (input, map) => input.split('').map(char => map[char] || char).join('');

function toSubscriptSmart(text) {
    text = text.replace(/_([a-z0-9]+)/gi, (match, sub) => {
        return [...sub].map(char => subscriptMap[char] || char).join('');
    });
    text = text.replace(/(\w+)_(\d+)/g, (match, main, sub) => {
        const convertedSub = [...sub].map(char => subscriptMap[char] || char).join('');
        return `${main}${convertedSub}`;
    });
    return text;
}

function latexToPlainText(latex) {
    return latex
    .replace(/(?<=\n|\b)\[|\](?=\n|\b)/g, '\n') 
    .replace(/(?<=\n|\b)\\\[|\\\](?=\n|\b)/g, '\n')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\textsc{([^}]*)}/g, function(match, text) {
            return text.split('').map(char => smallCapsMap[char] || char).join('');
    })

    .replace(/\\^/g, '^')
    .replace(/\\_/g, '_')
    .replace(/\\pm/g, '±')
    .replace(/\\cdot/g, '·')
    .replace(/\\infty/g, '∞')
    .replace(/\\approx/g, '≈')
    .replace(/\\neq/g, '≠')
    .replace(/\\leq/g, '≤')
    .replace(/\\geq/g, '≥')
    .replace(/\\sim/g, '~')
    .replace(/\\propto/g, '∝')
    .replace(/\\equiv/g, '≡')
    .replace(/\\subset/g, '⊂')
    .replace(/\\subseteq/g, '⊆')
    .replace(/\\supset/g, '⊃')
    .replace(/\\supseteq/g, '⊇')
    .replace(/\\emptyset/g, '∅')
    .replace(/\\sum/g, '∑')
    .replace(/\\int/g, '∫')
    .replace(/\\partial/g, '∂')
    .replace(/\\nabla/g, '∇')
    .replace(/\\land/g, '∧')
    .replace(/\\lor/g, '∨')
    .replace(/\\neg/g, '¬')
    .replace(/\\implies/g, '⇒')
    .replace(/\\iff/g, '⇔')
    .replace(/\\exists/g, '∃')
    .replace(/\\forall/g, '∀')
    .replace(/\\not\\exists/g, '∄')
    .replace(/\\theta/g, 'θ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\omega/g, 'ω')
    .replace(/\\sigma/g, 'σ')
    .replace(/\\mu/g, 'μ')
    .replace(/\\rho/g, 'ρ')
    .replace(/\\phi/g, 'φ')
    .replace(/\\kappa/g, 'κ')
    .replace(/\\lambda/g, 'λ')
    .replace(/\\nu/g, 'ν')
    .replace(/\\tau/g, 'τ')
    .replace(/\\epsilon/g, 'ε')
    .replace(/\\zeta/g, 'ζ')
    .replace(/\\eta/g, 'η')
    .replace(/\\xi/g, 'ξ')
    .replace(/\\varsigma/g, 'ς')
    .replace(/\\varphi/g, 'ϕ')
    .replace(/\\psi/g, 'ψ')
    .replace(/\\chi/g, 'χ')
    .replace(/\\hbar/g, 'ħ')
    .replace(/\\Theta/g, 'Θ')
    .replace(/\\Omega/g, 'Ω')
    .replace(/\\Phi/g, 'Φ')
    .replace(/\\Psi/g, 'Ψ')
    .replace(/\\Xi/g, 'Ξ')
    .replace(/\\Upsilon/g, 'Υ')
    .replace(/\\angle/g, '∠')
    .replace(/\\circ/g, '∘')
    .replace(/\\perp/g, '⊥')
    .replace(/\\parallel/g, '∥')
    .replace(/\\triangle/g, '△')
    .replace(/\\degree/g, '°')
    .replace(/\\leftarrow/g, '←')
    .replace(/\\rightarrow/g, '→')
    .replace(/\\uparrow/g, '↑')
    .replace(/\\downarrow/g, '↓')
    .replace(/\\circlearrowleft/g, '↺')
    .replace(/\\circlearrowright/g, '↻')

    .replace(/\\left/g, '(')
    .replace(/\\right/g, ')')
    .replace(/\\bigl/g, '⟨')
    .replace(/\\bigr/g, '⟩')
    .replace(/\\Bigl/g, '⟪')
    .replace(/\\Bigr/g, '⟫')
    .replace(/\\biggl/g, '⟮')
    .replace(/\\biggr/g, '⟯')
    .replace(/\\Biggl/g, '⟰')
    .replace(/\\Biggr/g, '⟱')
    .replace(/\\langle/g, '⟨')
    .replace(/\\rangle/g, '⟩')

    .replace(/\\begin{pmatrix}/g, '[')
    .replace(/\\end{pmatrix}/g, ']')
    .replace(/\\begin{bmatrix}/g, '[')
    .replace(/\\end{bmatrix}/g, ']')

    .replace(/\\begin{(\w+)}/g, ' Start of [$1]')
    .replace(/\\start{(\w+)}/g, ' Start of [$1]')
    .replace(/\\end{(\w+)}/g, ' End of[$1]')
    .replace(/\\start/g, '')
    .replace(/\\end/g, '')
    .replace(/\\centering/g, '')

    .replace(/\\textbf{([^}]*)}/g, '**$1**')
    .replace(/\\textit{([^}]*)}/g, '*$1*')
    .replace(/\\texttt{([^}]*)}/g, '`$1`') 
    .replace(/\\textsc{([^}]*)}/g, (match, text) => processNested(text, smallCapsMap))

    .replace(/\\cmexchar{(\d+)}/g, function(match, charCode) {
        return String.fromCharCode(parseInt(charCode, 10));
        })

    .replace(/\\cup/g, '∪')
    .replace(/\\cap/g, '∩')
    .replace(/\\in/g, '∈')
    .replace(/\\notin/g, '∉')
    .replace(/\\prec/g, '≺')
    .replace(/\\succ/g, '≻')
    .replace(/\\preceq/g, '⪯')
    .replace(/\\succeq/g, '⪰')
    .replace(/\\log/g, 'log')
    .replace(/\\ln/g, 'ln')
    .replace(/\\sin/g, 'sin')
    .replace(/\\cos/g, 'cos')
    .replace(/\\tan/g, 'tan')
    .replace(/\\csc/g, 'csc')
    .replace(/\\sec/g, 'sec')
    .replace(/\\cot/g, 'cot')
    .replace(/\\arcsin/g, 'sin⁻¹')
    .replace(/\\arccos/g, 'cos⁻¹')
    .replace(/\\arctan/g, 'tan⁻¹')
    .replace(/\\therefore/g, '∴')
    .replace(/\\because/g, '∵')
    .replace(/\\vdots/g, '⋮')
    .replace(/\\cdots/g, '⋯')
    .replace(/\\ell/g, 'ℓ')
    .replace(/\\diameter/g, '⌀')
    .replace(/\\mathbb{([A-Za-z])}/g, (_, letter) => {
        return mathbbMap[letter] || `mathbb${letter}`;
    })    
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\text{([^}]+)}/g, '$1')

    .replace(/\^([^{_\s]+|\{[^}]+\})/g, (_, superscript) => {
        const cleaned = superscript.replace(/[{}]/g, '');
        return processNested(cleaned, superscriptMap);
    })
    .replace(/_([^{^\s]+|\{[^}]+\})/g, (_, subscript) => {
        const cleaned = subscript.replace(/[{}]/g, '');
        return processNested(cleaned, subscriptMap);
    })
    .replace(/\\mod{([^}]+)}{([^}]+)}/g, '{$1%$2}')

    .replace(/\\mod/g, '%')

    .replace(/\\%{([^}]+)}{([^}]+)}/g, '{$1%$2}')
    .replace(/\\pi/g, 'π')
    .replace(/\\frac{([^}]+)}{([^}]+)}/g, (match, numerator, denominator) => {
        const isSuperscriptable = [...numerator].every(char => char in superscriptMap);
        const isSubscriptable = [...denominator].every(char => char in subscriptMap);

        if (isSuperscriptable && isSubscriptable) {
            return `[${processNested(numerator, superscriptMap)}∕${processNested(denominator, subscriptMap)}]`;
        } else {
            return `[${numerator}] / [${denominator}]`;
        }
    })

    .replace(/\\dfrac{([^}]+)}{([^}]+)}/g, (match, numerator, denominator) => {
        const isSuperscriptable = [...numerator].every(char => char in superscriptMap);
        const isSubscriptable = [...denominator].every(char => char in subscriptMap);
        
        if (isSuperscriptable && isSubscriptable) {
            return `${processNested(numerator, superscriptMap)}∕${processNested(denominator, subscriptMap)}`;
        } else {
            return `${numerator} / ${denominator}`;
        }
    })

    .replace(/\\sqrt{([^}]+)}/g, '√($1)')
    .replace(/\^($|\s)/g, '')
    .replace(/\_($|\s)/g, '')

    .replace(/\\n/g, '\n')
    .split('\n')
    .map(line => toSubscriptSmart(line))
    .join('\n')

    .replace(/\\/g, '');
};

module.exports = latexToPlainText;
