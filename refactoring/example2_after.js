const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;

function clean (cpf) {
    return cpf.replace(/[\.\-]*/g, "");
}

function isValidLength (cpf) {
    return cpf.length === 11;
}

function isBLocked (cpf) {
    const [firstDigit] = cpf;
    return [...cpf].every(digit => digit === firstDigit);
}

function calculateDigit (cpf, factor) {
    let total = 0;
    for (const digit of cpf) {
        if (factor > 1) total += parseInt(digit) * factor--;
    }
    const rest = total % 11;
    return (rest < 2) ? 0 : 11 - rest;
}

function extractActual (cpf) {
    return cpf.slice(9);
}

function validate(rawCpf) {
    if (!rawCpf) return false;
    const cpf = clean(rawCpf);
    if (!isValidLength) return false;
    if (isBLocked(cpf)) return false;
    const digit1 = calculateDigit(cpf, FACTOR_DIGIT_1);
    const digit2 = calculateDigit(cpf, FACTOR_DIGIT_2);
    const actualDigit = extractActual(cpf);
    const calculatedDigit = `${digit1}${digit2}`;
    return actualDigit == calculatedDigit;
}

export default validatedigit2;
