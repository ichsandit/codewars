function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
        return w.slice(1) + w[0] + 'ay';
    });
}
